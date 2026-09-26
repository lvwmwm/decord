// Module ID: 5463
// Function ID: 5464
// Name: ImagePickerUtils
// Dependencies: [1610, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5463 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
