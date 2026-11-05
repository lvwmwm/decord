// Module ID: 10712
// Function ID: 10713
// Name: showUploadPreviewActionSheet
// Dependencies: [5384, 10713, 2123, 2]
// Exports: default

// Module 10712 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10713, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
