// Module ID: 10658
// Function ID: 10659
// Name: showUploadPreviewActionSheet
// Dependencies: [5381, 10659, 2123, 2]
// Exports: default

// Module 10658 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10659, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
