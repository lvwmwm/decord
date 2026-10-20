// Module ID: 9248
// Function ID: 9249
// Name: useGameProfileReviewDisplayData
// Dependencies: [19, 558, 576, 9196, 9239, 2043, 1128, 9240, 2]

// Module 9248 (useGameProfileReviewDisplayData)
import react2 from "react" /* 576 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2043 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9196 */;
import calculateSteamReviewScoreDescription from "calculateSteamReviewScoreDescription" /* 9239 */;
import GameProfileReviewUtils from "GameProfileReviewUtils" /* 9240 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameProfileReviewDisplayData(reviews, arg1) {
  const obj = react2;
  const cResult = obj.c(16);
  reviews = reviews.reviews;
  let steam;
  if (reviews != null) {
    steam = reviews.steam;
  }
  const tmp5 = reviews.steamReleaseStatus !== tmp(9196).SteamReleaseStatus.RETIRED_ABANDONED && null != arg1;
  let recentRating;
  if (steam != null) {
    recentRating = steam.recentRating;
  }
  let recentRatingCount;
  if (steam != null) {
    recentRatingCount = steam.recentRatingCount;
  }
  if (cResult[0] === recentRating) {
    let tmp9;
    let tmp12;
    let rating;
    let ratingCount;
    let tmp19;
    if (cResult[1] === recentRatingCount) {
      tmp9 = cResult[2];
    }
    const tmp11 = tmp5 && tmp9 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    if (cResult[3] !== steam) {
      const tmp13 = null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount && steam.localizedRatingCount >= 200 && steam.ratingCount >= 2000;
      cResult[3] = steam;
      cResult[4] = tmp13;
      tmp12 = tmp13;
    } else {
      tmp12 = cResult[4];
    }
    if (tmp12) {
      let localizedRating;
      if (steam != null) {
        localizedRating = steam.localizedRating;
      }
      rating = localizedRating;
    } else if (steam != null) {
      rating = steam.rating;
    }
    if (tmp12) {
      let localizedRatingCount;
      if (steam != null) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      ratingCount = localizedRatingCount;
    } else if (steam != null) {
      ratingCount = steam.ratingCount;
    }
    const t = tmp(1128).t;
    const tmp18 = tmp12 ? t["aWb+V4"] : t["8e4LiB"];
    if (cResult[5] !== reviews) {
      const tmpResult = GameProfileReviewUtils;
      const mobileStoreReviews = tmpResult.getMobileStoreReviews(reviews);
      cResult[5] = reviews;
      cResult[6] = mobileStoreReviews;
      tmp19 = mobileStoreReviews;
    } else {
      tmp19 = cResult[6];
    }
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp11) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === steam) {
            if (cResult[11] === rating) {
              if (cResult[12] === ratingCount) {
                if (cResult[13] === tmp18) {
                  let tmp21;
                  if (cResult[14] === tmp19) {
                    tmp21 = cResult[15];
                  }
                  return tmp21;
                }
              }
            }
          }
        }
      }
    }
    const obj2 = { steamReview: steam, showSteamReview: tmp5, showRecentSteamReview: tmp11, showLocalizedReview: tmp12, primarySteamRating: rating, primarySteamRatingCount: ratingCount, primarySteamTitleKey: tmp18, mobileStoreReviews: tmp19 };
    cResult[7] = tmp12;
    cResult[8] = tmp11;
    cResult[9] = tmp5;
    cResult[10] = steam;
    cResult[11] = rating;
    cResult[12] = ratingCount;
    cResult[13] = tmp18;
    cResult[14] = tmp19;
    cResult[15] = obj2;
    tmp21 = obj2;
  }
  const tmpResult2 = calculateSteamReviewScoreDescription;
  const result = tmpResult2.calculateSteamReviewScoreDescription(recentRating, recentRatingCount, true);
  cResult[0] = recentRating;
  cResult[1] = recentRatingCount;
  cResult[2] = result;
  tmp9 = result;
}) : (function useGameProfileReviewDisplayData(arg0, arg1) {
  let reviews = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let rating;
    let ratingCount;
    let t;
    let tmp3Result2;
    reviews = reviews.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    const tmp5 = tmp.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED && null != closure_1;
    calculateSteamReviewScoreDescription;
    if (steam != null) {
      const recentRating = steam.recentRating;
    }
    if (steam != null) {
      const recentRatingCount = steam.recentRatingCount;
    }
    let tmp10 = null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount;
    const tmp9 = tmp5 && tmp8 !== GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS;
    if (tmp10) {
      tmp10 = steam.localizedRatingCount >= 200;
    }
    if (tmp10) {
      tmp10 = steam.ratingCount >= 2000;
    }
    const obj = { steamReview: steam, showSteamReview: tmp5, showRecentSteamReview: tmp9, showLocalizedReview: tmp10, primarySteamRating: rating, primarySteamRatingCount: ratingCount, primarySteamTitleKey: tmp10 ? t["aWb+V4"] : t["8e4LiB"], mobileStoreReviews: tmp3Result2.getMobileStoreReviews(reviews) };
    if (tmp10) {
      let localizedRating;
      if (steam != null) {
        localizedRating = steam.localizedRating;
      }
      rating = localizedRating;
    } else if (steam != null) {
      rating = steam.rating;
    }
    if (tmp10) {
      let localizedRatingCount;
      if (steam != null) {
        localizedRatingCount = steam.localizedRatingCount;
      }
      ratingCount = localizedRatingCount;
    } else if (steam != null) {
      ratingCount = steam.ratingCount;
    }
    t = tmp3(1128).t;
    tmp3Result2 = GameProfileReviewUtils;
    return obj;
  }, items);
});
let result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileReviewDisplayData.tsx");

export const useGameProfileReviewDisplayData = tmp2;
