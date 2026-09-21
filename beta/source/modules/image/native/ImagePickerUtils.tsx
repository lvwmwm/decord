// Module ID: 5369
// Function ID: 5370
// Name: ImagePickerUtils
// Dependencies: [1613, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5369 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1613 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
