// Module ID: 12504
// Function ID: 95824
// Name: _showAndroidRatingRequest
// Dependencies: []
// Exports: default

// Module 12504 (_showAndroidRatingRequest)
function _showAndroidRatingRequest() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _showAndroidRatingRequest = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const NativeModules = arg1(dependencyMap[1]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[2]);
importDefaultResult = new importDefaultResult("requestReviewModal");
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/feedback/native/requestReviewModal.tsx");

export default function requestReviewModal() {
  if (obj.isAndroid()) {
    function showAndroidRatingRequest() {
      return callback(...arguments);
    }();
  } else {
    const AppStoreManager = NativeModules.AppStoreManager;
    const review = AppStoreManager.requestReview();
  }
};
