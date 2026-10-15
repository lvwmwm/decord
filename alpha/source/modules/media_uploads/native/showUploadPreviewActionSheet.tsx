// Module ID: 10239
// Function ID: 10240
// Name: showUploadPreviewActionSheet
// Dependencies: [5115, 10240, 2000, 2]
// Exports: default

// Module 10239 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10240, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
