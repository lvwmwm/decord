// Module ID: 16195
// Function ID: 16196
// Name: shouldShowLogUploadForCategory
// Dependencies: [9532, 2]
// Exports: shouldShowLogUploadForCategory

// Module 16195 (shouldShowLogUploadForCategory)
import { FeedbackRating } from "FeedbackRating";

let closure_1 = {};
const result = require("set").fileFinishedImporting("modules/feedback/shouldShowLogUploadForCategory.tsx");

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
    if (null != table[category]) {
      let num3 = tmp2[reason.value];
      if (num3 == null) {
        num3 = 0.01;
      }
      num2 = num3;
    }
    const _Math = Math;
    return Math.random() < num2;
  }
};
