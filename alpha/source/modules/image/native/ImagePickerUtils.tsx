// Module ID: 8356
// Function ID: 8357
// Name: ImagePickerUtils
// Dependencies: [1625, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8356 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/image/native/ImagePickerUtils.tsx");

export function isActionPickSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
export function isImageCaptureIntentSupported() {
  const obj = MetaQuestUtils;
  return !obj.isMetaQuest();
}
