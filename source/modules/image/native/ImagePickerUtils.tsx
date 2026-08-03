// Module ID: 4810
// Function ID: 4811
// Name: isActionPickSupported
// Dependencies: [1577, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4810 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
