// Module ID: 8222
// Function ID: 8223
// Name: ImagePickerUtils
// Dependencies: [1622, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8222 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1622 */;
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
