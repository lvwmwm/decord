// Module ID: 12623
// Function ID: 98008
// Name: _showAndroidRatingRequest
// Dependencies: [5, 27, 3, 12624, 477, 2]
// Exports: default

// Module 12623 (_showAndroidRatingRequest)
import set from "set";
import { NativeModules } from "get ActivityIndicator";
import importDefaultResult from "enforcing";

const require = arg1;
function _showAndroidRatingRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
importDefaultResult = new importDefaultResult("requestReviewModal");
const result = require("timestamp").fileFinishedImporting("modules/feedback/native/requestReviewModal.tsx");

export default function requestReviewModal() {
  if (obj.isAndroid()) {
    (function showAndroidRatingRequest() {
      return outer1_6(...arguments);
    })();
  } else {
    const AppStoreManager = NativeModules.AppStoreManager;
    const review = AppStoreManager.requestReview();
  }
};
