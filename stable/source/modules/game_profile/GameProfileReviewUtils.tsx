// Module ID: 9353
// Function ID: 9354
// Name: GameProfileReviewUtils
// Dependencies: [1128, 9277, 9354, 2042, 9307, 2]
// Exports: canShowOpenCriticReview, getMobileStoreReviews, getSteamReviewScoreDescriptionColor, getSteamReviewScoreDescriptionIntl

// Module 9353 (GameProfileReviewUtils)
import intl11 from "intl" /* 1128 */;
import GameDetectionTypes from "GameDetectionTypes" /* 2042 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9277 */;
import SteamReleaseStatus from "SteamReleaseStatus" /* 9307 */;
import GameProfileMobileStoreLinkUtils from "GameProfileMobileStoreLinkUtils" /* 9354 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const obj = { appStore: obj2, googlePlay: obj3 };
obj2 = {
  getTitle() {
    const intl = intl11.intl;
    return intl.string(intl11.t.LVy7Ug);
  },
  action: GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreReviews
};
obj3 = {
  getTitle() {
    const intl = intl11.intl;
    return intl.string(intl11.t.V6rllO);
  },
  action: GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayReviews
};
const result = size.fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getMobileStoreReviews = function getMobileStoreReviews(reviews) {
  const entries = Object.entries(obj);
  return entries.flatMap(function(item) {
    let ratingCount;
    let str;
    let str2;
    let str3;
    let tmp;
    [tmp, obj] = item;
    reviews = reviews.reviews;
    let tmp3;
    const tmp2 = reviews;
    if (reviews != null) {
      tmp3 = reviews[tmp];
    }
    let rating;
    if (tmp3 != null) {
      rating = tmp3.rating;
    }
    if (tmp3 != null) {
      ratingCount = tmp3.ratingCount;
    }
    if (null != rating) {
      if (null != ratingCount) {
        let items1;
        const obj7 = GameProfileMobileStoreLinkUtils;
        const mobileStoreLink = obj7.getMobileStoreLink(tmp2, GameProfileMobileStoreLinkUtils.MOBILE_STORES[tmp]);
        if (null != mobileStoreLink) {
          const url = mobileStoreLink.url;
          const title = obj.getTitle();
          const _Intl = Intl;
          const self = this;
          const self2 = this;
          const numberFormat = new Intl.NumberFormat(tmp9(1128).intl.currentLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          const formatResult = numberFormat.format(rating);
          const obj2 = { key: tmp, url, title, ratingText: str.toString(), ratingCountText: str2.toString(), accessibilityLabel: str3.toString(), action: obj.action };
          const intl = tmp9(1128).intl;
          const obj3 = { rating: formatResult };
          str = intl.format(intl11.t["zdL4/T"], obj3);
          const intl2 = tmp9(1128).intl;
          const obj4 = { rating_count: ratingCount };
          str2 = intl2.format(intl11.t.u1m2hs, obj4);
          const intl3 = tmp9(1128).intl;
          const obj5 = { store: title, rating: formatResult, rating_count: ratingCount };
          const items = [obj2];
          items1 = items;
          str3 = intl3.format(intl11.t["63jSRx"], obj5);
        } else {
          items1 = [];
        }
        return items1;
      }
    }
    return [];
  });
};
export const getSteamReviewScoreDescriptionColor = function getSteamReviewScoreDescriptionColor(NO_USER_REVIEWS) {
  if (GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS === NO_USER_REVIEWS) {
    return "text-subtle";
  } else {
    if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE !== NO_USER_REVIEWS) {
      if (GameDetectionTypes.SteamReviewScoreDescription.VERY_POSITIVE !== NO_USER_REVIEWS) {
        if (GameDetectionTypes.SteamReviewScoreDescription.POSITIVE !== NO_USER_REVIEWS) {
          if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_POSITIVE !== NO_USER_REVIEWS) {
            if (GameDetectionTypes.SteamReviewScoreDescription.MIXED === NO_USER_REVIEWS) {
              return "steam-review-text-mixed";
            } else {
              if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_NEGATIVE !== NO_USER_REVIEWS) {
                if (GameDetectionTypes.SteamReviewScoreDescription.NEGATIVE !== NO_USER_REVIEWS) {
                  if (GameDetectionTypes.SteamReviewScoreDescription.VERY_NEGATIVE !== NO_USER_REVIEWS) {
                    if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE !== NO_USER_REVIEWS) {
                      return "text-subtle";
                    }
                  }
                }
              }
              return "steam-review-text-negative";
            }
          }
        }
      }
    }
    return "steam-review-text-positive";
  }
};
export const getSteamReviewScoreDescriptionIntl = function getSteamReviewScoreDescriptionIntl(result) {
  if (GameDetectionTypes.SteamReviewScoreDescription.NO_USER_REVIEWS === result) {
    const intl10 = tmp(1128).intl;
    return intl10.string(intl11.t.CLMt8J);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = tmp(1128).intl;
    return intl9.string(intl11.t["75sx1S"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = tmp(1128).intl;
    return intl8.string(intl11.t["EkOVg+"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = tmp(1128).intl;
    return intl7.string(intl11.t.ZUkFtr);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = tmp(1128).intl;
    return intl6.string(intl11.t.M7Z09a);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MIXED === result) {
    const intl5 = tmp(1128).intl;
    return intl5.string(intl11.t.c8yuHR);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = tmp(1128).intl;
    return intl4.string(intl11.t.H0MSjG);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = tmp(1128).intl;
    return intl3.string(intl11.t.vpLrgz);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = tmp(1128).intl;
    return intl2.string(intl11.t["5spYuX"]);
  } else if (GameDetectionTypes.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = tmp(1128).intl;
    return intl.string(intl11.t.A8uk5J);
  } else {
    return null;
  }
};
export const canShowOpenCriticReview = function canShowOpenCriticReview(game, gameProfileMobileStoreReviews) {
  let tmp = game.steamReleaseStatus !== SteamReleaseStatus.SteamReleaseStatus.RETIRED_ABANDONED || gameProfileMobileStoreReviews.length > 0;
  if (tmp) {
    const reviews = game.reviews;
    let opencritic;
    if (reviews != null) {
      opencritic = reviews.opencritic;
    }
    tmp = null != opencritic;
  }
  if (tmp) {
    tmp = null != game.opencriticUrl;
  }
  return tmp;
};
