// Module ID: 8211
// Function ID: 8212
// Name: ImagePickerUtils
// Dependencies: [1628, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8211 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
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
