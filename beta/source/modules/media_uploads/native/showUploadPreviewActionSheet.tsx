// Module ID: 10362
// Function ID: 10363
// Name: showUploadPreviewActionSheet
// Dependencies: [4854, 10363, 1987, 2]
// Exports: default

// Module 10362 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10363, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
