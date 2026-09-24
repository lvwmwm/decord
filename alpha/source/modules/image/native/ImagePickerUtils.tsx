// Module ID: 5455
// Function ID: 5456
// Name: ImagePickerUtils
// Dependencies: [1609, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 5455 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
