// Module ID: 8476
// Function ID: 8477
// Name: ImagePickerUtils
// Dependencies: [1625, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8476 (ImagePickerUtils)
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
