// Module ID: 10483
// Function ID: 10484
// Name: showUploadPreviewActionSheet
// Dependencies: [5247, 10484, 2000, 2]
// Exports: default

// Module 10483 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10484, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
