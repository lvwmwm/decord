// Module ID: 4871
// Function ID: 4872
// Name: isActionPickSupported
// Dependencies: [1605, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4871 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1605) /* isMetaQuest */.isMetaQuest();
};
