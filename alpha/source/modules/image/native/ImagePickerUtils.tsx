// Module ID: 7777
// Function ID: 7778
// Name: ImagePickerUtils
// Dependencies: [1628, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 7777 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
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
