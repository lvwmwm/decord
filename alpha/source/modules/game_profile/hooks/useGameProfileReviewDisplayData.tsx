// Module ID: 9717
// Function ID: 9718
// Name: useGameProfileReviewDisplayData
// Dependencies: [19, 9661, 9707, 2162, 1113, 9708, 2]
// Exports: useGameProfileReviewDisplayData

// Module 9717 (useGameProfileReviewDisplayData)
import GameDetectionTypes from "GameDetectionTypes" /* 2162 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9661 */;
import calculateSteamReviewScoreDescription from "calculateSteamReviewScoreDescription" /* 9707 */;
import GameProfileReviewUtils from "GameProfileReviewUtils" /* 9708 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileReviewDisplayData.tsx");

export function useGameProfileReviewDisplayData(game, steamWebsiteUrl) {
  let closure_1 = steamWebsiteUrl;
  const items = [game, steamWebsiteUrl];
  return react.useMemo(() => {
    let rating;
    let ratingCount;
    let t;
    let tmp3Result2;
    const reviews = game.reviews;
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    const tmp5 = tmp.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED && null != steamWebsiteUrl;
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
    const obj = { steamReview: steam, showSteamReview: tmp5, showRecentSteamReview: tmp9, showLocalizedReview: tmp10, primarySteamRating: rating, primarySteamRatingCount: ratingCount, primarySteamTitleKey: tmp10 ? t["aWb+V4"] : t["8e4LiB"], mobileStoreReviews: tmp3Result2.getMobileStoreReviews(game) };
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
    t = tmp3(1113).t;
    tmp3Result2 = GameProfileReviewUtils;
    return obj;
  }, items);
}
