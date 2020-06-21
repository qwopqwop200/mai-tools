import {getRankDefinitions, getRankIndexByAchievement} from './rank-functions.js';
import {calculateRatingRange} from './rating-functions.js';
import {getSongsByNextRatingComparator} from './record-comparator.js';
import {SSSPLUS_MIN_ACHIEVEMENT} from './shared-constants.js';

const CANDIDATE_SONGS_POOL_COUNT = 50;
const CANDIDATE_SONGS_COUNT = 20;
const MIN_RATING_ADJUSTMENT = 10; // for sorting order tweak

function getNextRating(record, isDxPlus, ratingThreshold) {
  const rankDefIdx = getRankIndexByAchievement(record.achievement, isDxPlus);
  if (rankDefIdx <= 0) {
    return [record.rating, record.achievement];
  }
  const rankDefs = getRankDefinitions(isDxPlus);
  const ratingByRank = new Map();
  for (let i = rankDefIdx - 1; i >= 0 ; i--) {
    const rank = rankDefs[i];
    if (rank.title === rankDefs[i+1].title) {
      continue;
    }
    const [minRt, maxRt] = calculateRatingRange(record.innerLv, rank, isDxPlus);
    if (maxRt >= ratingThreshold) {
      ratingByRank.set(rank.title, {minRt, rank});
    }
  }
  return ratingByRank;
}

export function getCandidateSongs(songScores, startIndex, isDxPlus) {
  const candidates = [];
  if (startIndex <= 0) {
    return candidates;
  }
  const minRating = songScores[startIndex-1].rating;
  for (let i = startIndex; i < songScores.length; i++) {
    const record = songScores[i]
    if (record.achievement < SSSPLUS_MIN_ACHIEVEMENT) {
      const ratingByRank = getNextRating(record, isDxPlus, minRating);
      if (!ratingByRank.size) {
        continue;
      }
      record.nextRanks = ratingByRank;
      candidates.push(record);
      if (candidates.length >= CANDIDATE_SONGS_POOL_COUNT) {
        break;
      }
    }
  }
  candidates.sort(getSongsByNextRatingComparator(minRating - MIN_RATING_ADJUSTMENT));
  return candidates.slice(0, CANDIDATE_SONGS_COUNT);
}
