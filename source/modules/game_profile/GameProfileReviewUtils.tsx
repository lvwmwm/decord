// Module ID: 8679
// Function ID: 68650
// Name: getSteamReviewScoreDescriptionColor
// Dependencies: [4164, 1212, 2]
// Exports: canShowLocalizedSteamReview, getSteamReviewScoreDescriptionColor, getSteamReviewScoreDescriptionIntl

// Module 8679 (getSteamReviewScoreDescriptionColor)
const result = require("set").fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getSteamReviewScoreDescriptionColor = function getSteamReviewScoreDescriptionColor(NO_USER_REVIEWS) {
  if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NO_USER_REVIEWS === NO_USER_REVIEWS) {
    return "text-subtle";
  } else {
    if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE !== NO_USER_REVIEWS) {
      if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.VERY_POSITIVE !== NO_USER_REVIEWS) {
        if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.POSITIVE !== NO_USER_REVIEWS) {
          if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MOSTLY_POSITIVE !== NO_USER_REVIEWS) {
            if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MIXED === NO_USER_REVIEWS) {
              return "steam-review-text-mixed";
            } else {
              if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MOSTLY_NEGATIVE !== NO_USER_REVIEWS) {
                if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NEGATIVE !== NO_USER_REVIEWS) {
                  if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.VERY_NEGATIVE !== NO_USER_REVIEWS) {
                    if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE !== NO_USER_REVIEWS) {
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
  if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NO_USER_REVIEWS === result) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.CLMt8J);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t["75sx1S"]);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t["EkOVg+"]);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.ZUkFtr);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.M7Z09a);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MIXED === result) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.c8yuHR);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.H0MSjG);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.vpLrgz);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["5spYuX"]);
  } else if (require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.A8uk5J);
  } else {
    return null;
  }
};
export const canShowLocalizedSteamReview = function canShowLocalizedSteamReview(steam) {
  let tmp = null != steam && null != steam.localizedRating && null != steam.localizedRatingCount && null != steam.ratingCount;
  if (tmp) {
    tmp = steam.localizedRatingCount >= 200;
  }
  if (tmp) {
    tmp = steam.ratingCount >= 2000;
  }
  return tmp;
};
