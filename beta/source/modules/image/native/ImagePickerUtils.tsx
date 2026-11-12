// Module ID: 8325
// Function ID: 8326
// Name: ImagePickerUtils
// Dependencies: [1624, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8325 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
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
