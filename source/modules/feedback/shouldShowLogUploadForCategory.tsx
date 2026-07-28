// Module ID: 16135
// Function ID: 124769
// Name: shouldShowLogUploadForCategory
// Dependencies: [9497, 2]
// Exports: shouldShowLogUploadForCategory

// Module 16135 (shouldShowLogUploadForCategory)
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
      num2 = 0.01;
      if (null != tmp3[reason.value]) {
        num2 = tmp5;
      }
    }
    const _Math = Math;
    return Math.random() < num2;
  }
};
