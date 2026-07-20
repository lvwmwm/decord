// Module ID: 4683
// Function ID: 40756
// Name: isActionPickSupported
// Dependencies: [6, 7]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4683 (isActionPickSupported)
import _defineProperties from "_defineProperties";

const result = _defineProperties.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(dependencyMap[0]).isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(dependencyMap[0]).isMetaQuest();
};
