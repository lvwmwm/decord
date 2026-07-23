// Module ID: 16026
// Function ID: 124076
// Name: shouldShowLogUploadForCategory
// Dependencies: [9500, 2]
// Exports: shouldShowLogUploadForCategory

// Module 16026 (shouldShowLogUploadForCategory)
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
