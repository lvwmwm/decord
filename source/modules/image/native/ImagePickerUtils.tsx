// Module ID: 4873
// Function ID: 4874
// Name: isActionPickSupported
// Dependencies: [1605, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4873 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
