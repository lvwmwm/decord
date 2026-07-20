// Module ID: 8626
// Function ID: 68355
// Name: getSteamReviewScoreDescriptionColor
// Dependencies: []
// Exports: canShowLocalizedSteamReview, getSteamReviewScoreDescriptionColor, getSteamReviewScoreDescriptionIntl

// Module 8626 (getSteamReviewScoreDescriptionColor)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/game_profile/GameProfileReviewUtils.tsx");

export const getSteamReviewScoreDescriptionColor = function getSteamReviewScoreDescriptionColor(NO_USER_REVIEWS) {
  if (require(dependencyMap[0]).SteamReviewScoreDescription.NO_USER_REVIEWS === NO_USER_REVIEWS) {
    return "text-subtle";
  } else {
    if (require(dependencyMap[0]).SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE !== NO_USER_REVIEWS) {
      if (require(dependencyMap[0]).SteamReviewScoreDescription.VERY_POSITIVE !== NO_USER_REVIEWS) {
        if (require(dependencyMap[0]).SteamReviewScoreDescription.POSITIVE !== NO_USER_REVIEWS) {
          if (require(dependencyMap[0]).SteamReviewScoreDescription.MOSTLY_POSITIVE !== NO_USER_REVIEWS) {
            if (require(dependencyMap[0]).SteamReviewScoreDescription.MIXED === NO_USER_REVIEWS) {
              return "steam-review-text-mixed";
            } else {
              if (require(dependencyMap[0]).SteamReviewScoreDescription.MOSTLY_NEGATIVE !== NO_USER_REVIEWS) {
                if (require(dependencyMap[0]).SteamReviewScoreDescription.NEGATIVE !== NO_USER_REVIEWS) {
                  if (require(dependencyMap[0]).SteamReviewScoreDescription.VERY_NEGATIVE !== NO_USER_REVIEWS) {
                    if (require(dependencyMap[0]).SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE !== NO_USER_REVIEWS) {
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
  if (require(dependencyMap[0]).SteamReviewScoreDescription.NO_USER_REVIEWS === result) {
    const intl10 = require(dependencyMap[1]).intl;
    return intl10.string(require(dependencyMap[1]).t.CLMt8J);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE === result) {
    const intl9 = require(dependencyMap[1]).intl;
    return intl9.string(require(dependencyMap[1]).t.75sx1S);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.VERY_POSITIVE === result) {
    const intl8 = require(dependencyMap[1]).intl;
    return intl8.string(require(dependencyMap[1]).t.EkOVg+);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.POSITIVE === result) {
    const intl7 = require(dependencyMap[1]).intl;
    return intl7.string(require(dependencyMap[1]).t.ZUkFtr);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.MOSTLY_POSITIVE === result) {
    const intl6 = require(dependencyMap[1]).intl;
    return intl6.string(require(dependencyMap[1]).t.M7Z09a);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.MIXED === result) {
    const intl5 = require(dependencyMap[1]).intl;
    return intl5.string(require(dependencyMap[1]).t.c8yuHR);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.MOSTLY_NEGATIVE === result) {
    const intl4 = require(dependencyMap[1]).intl;
    return intl4.string(require(dependencyMap[1]).t.H0MSjG);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.NEGATIVE === result) {
    const intl3 = require(dependencyMap[1]).intl;
    return intl3.string(require(dependencyMap[1]).t.vpLrgz);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.VERY_NEGATIVE === result) {
    const intl2 = require(dependencyMap[1]).intl;
    return intl2.string(require(dependencyMap[1]).t.5spYuX);
  } else if (require(dependencyMap[0]).SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE === result) {
    const intl = require(dependencyMap[1]).intl;
    return intl.string(require(dependencyMap[1]).t.A8uk5J);
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
