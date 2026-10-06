// Module ID: 7299
// Function ID: 7300
// Name: ImagePickerUtils
// Dependencies: [1615, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 7299 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
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
