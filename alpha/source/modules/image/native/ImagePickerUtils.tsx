// Module ID: 8357
// Function ID: 8358
// Name: ImagePickerUtils
// Dependencies: [1627, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8357 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1627 */;
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
