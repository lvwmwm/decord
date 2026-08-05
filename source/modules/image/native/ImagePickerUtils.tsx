// Module ID: 4824
// Function ID: 4825
// Name: isActionPickSupported
// Dependencies: [1577, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4824 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
