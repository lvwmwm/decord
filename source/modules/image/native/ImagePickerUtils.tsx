// Module ID: 4913
// Function ID: 4914
// Name: isActionPickSupported
// Dependencies: [1624, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4913 (isActionPickSupported)
const result = require("set").fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !require(1624) /* isMetaQuest */.isMetaQuest();
};
