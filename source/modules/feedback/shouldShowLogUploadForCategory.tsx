// Module ID: 15897
// Function ID: 121816
// Name: shouldShowLogUploadForCategory
// Dependencies: []
// Exports: shouldShowLogUploadForCategory

// Module 15897 (shouldShowLogUploadForCategory)
const FeedbackRating = require(dependencyMap[0]).FeedbackRating;
let closure_1 = {};
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/feedback/shouldShowLogUploadForCategory.tsx");

export const shouldShowLogUploadForCategory = function shouldShowLogUploadForCategory(rating, category, reason) {
  if (rating !== FeedbackRating.BAD) {
    if (rating !== FeedbackRating.NEUTRAL) {
      return false;
    }
  }
  if (null == category) {
    return false;
  } else {
    let num2 = 0.01;
    if (null != closure_1[category]) {
      num2 = 0.01;
      if (null != tmp3[reason.value]) {
        num2 = tmp5;
      }
    }
    const _Math = Math;
    return Math.random() < num2;
  }
};
