// Module ID: 8100
// Function ID: 8101
// Name: ImagePickerUtils
// Dependencies: [1630, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8100 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export const isActionPickSupported = function isActionPickSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
export const isImageCaptureIntentSupported = function isImageCaptureIntentSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
};
