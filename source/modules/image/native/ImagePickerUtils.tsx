// Module ID: 5151
// Function ID: 5152
// Name: isActionPickSupported
// Dependencies: [1608, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5151 (isActionPickSupported)
import set from "set" /* 2 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;

const result = set.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !isMetaQuest.isMetaQuest();
};
