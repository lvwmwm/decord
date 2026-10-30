// Module ID: 8214
// Function ID: 8215
// Name: ImagePickerUtils
// Dependencies: [1623, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8214 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
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
