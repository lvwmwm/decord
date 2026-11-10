// Module ID: 10656
// Function ID: 10657
// Name: showUploadPreviewActionSheet
// Dependencies: [5376, 10657, 2118, 2]
// Exports: default

// Module 10656 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10657, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
