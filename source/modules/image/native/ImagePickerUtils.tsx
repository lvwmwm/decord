// Module ID: 4722
// Function ID: 40963
// Name: isActionPickSupported
// Dependencies: [1553, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4722 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1553) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1553) /* isMetaQuest */.isMetaQuest();
};
