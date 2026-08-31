// Module ID: 5063
// Function ID: 5064
// Name: isActionPickSupported
// Dependencies: [1624, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5063 (isActionPickSupported)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1624 */;

const result = set.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};
