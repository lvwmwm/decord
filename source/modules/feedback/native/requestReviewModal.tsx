// Module ID: 12674
// Function ID: 98329
// Name: _showAndroidRatingRequest
// Dependencies: [5, 27, 3, 12675, 477, 2]
// Exports: default

// Module 12674 (_showAndroidRatingRequest)
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
  let obj = require(477) /* set */;
  if (obj.isAndroid()) {
    let resolved = (function showAndroidRatingRequest() {
      return outer1_6(...arguments);
    })();
  } else {
    const AppStoreManager = NativeModules.AppStoreManager;
    const review = AppStoreManager.requestReview();
    obj = { ok: true };
    resolved = Promise.resolve(obj);
  }
  return resolved;
};
