// Module ID: 7743
// Function ID: 7744
// Name: ImagePickerUtils
// Dependencies: [1627, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 7743 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
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
