// Module ID: 5232
// Function ID: 5233
// Name: ImagePickerUtils
// Dependencies: [1608, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5232 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
