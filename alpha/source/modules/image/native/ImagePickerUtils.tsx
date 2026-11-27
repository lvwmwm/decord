// Module ID: 8139
// Function ID: 8140
// Name: ImagePickerUtils
// Dependencies: [1626, 2]
// Exports: isActionPickSupported, isImageCaptureIntentSupported

// Module 8139 (ImagePickerUtils)
import MetaQuestUtils from "MetaQuestUtils" /* 1626 */;
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
