// Module ID: 10374
// Function ID: 10375
// Name: showUploadPreviewActionSheet
// Dependencies: [5192, 10375, 2002, 2]
// Exports: default

// Module 10374 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10375, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
