// Module ID: 8637
// Function ID: 68428
// Name: calculateSteamReviewScoreDescription
// Dependencies: [4164, 2]
// Exports: calculateSteamReviewScoreDescription

// Module 8637 (calculateSteamReviewScoreDescription)
const result = require("set").fileFinishedImporting("modules/game_detection/calculateSteamReviewScoreDescription.tsx");

export const calculateSteamReviewScoreDescription = function calculateSteamReviewScoreDescription(rating, ratingCount, isRecentRating) {
  let num = 50;
  let num2 = 50;
  if (isRecentRating) {
    num2 = 0;
  }
  let num3 = 500;
  let num4 = 500;
  if (isRecentRating) {
    num4 = 100;
  }
  if (isRecentRating) {
    num = 0;
  }
  if (isRecentRating) {
    num3 = 100;
  }
  if (null != rating) {
    if (null != ratingCount) {
      if (ratingCount >= 10) {
        if (rating >= 80) {
          if (ratingCount < num2) {
            let VERY_POSITIVE = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.POSITIVE;
          } else {
            if (ratingCount >= num4) {
              if (rating >= 95) {
                VERY_POSITIVE = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.OVERWHELMINGLY_POSITIVE;
              }
            }
            VERY_POSITIVE = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.VERY_POSITIVE;
          }
        } else if (rating >= 70) {
          let NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MOSTLY_POSITIVE;
        } else if (rating >= 40) {
          NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MIXED;
        } else if (rating >= 20) {
          NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.MOSTLY_NEGATIVE;
        } else if (ratingCount < num) {
          NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NEGATIVE;
        } else if (ratingCount < num3) {
          NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.VERY_NEGATIVE;
        } else {
          NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.OVERWHELMINGLY_NEGATIVE;
        }
      }
      return NO_USER_REVIEWS;
    }
  }
  NO_USER_REVIEWS = require(4164) /* _isNativeReflectConstruct */.SteamReviewScoreDescription.NO_USER_REVIEWS;
};
