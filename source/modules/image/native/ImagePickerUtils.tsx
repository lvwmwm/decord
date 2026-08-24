// Module ID: 4857
// Function ID: 4858
// Name: isActionPickSupported
// Dependencies: [1625, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 4857 (isActionPickSupported)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = set.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};
