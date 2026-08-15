// Module ID: 4852
// Function ID: 4853
// Name: isActionPickSupported
// Dependencies: [1625, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4852 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1625) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1625) /* isMetaQuest */.isMetaQuest();
};
