// Module ID: 5112
// Function ID: 5113
// Name: isActionPickSupported
// Dependencies: [1623, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5112 (isActionPickSupported)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;

const result = set.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};
