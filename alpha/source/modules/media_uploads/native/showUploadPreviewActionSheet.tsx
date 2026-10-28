// Module ID: 10450
// Function ID: 10451
// Name: showUploadPreviewActionSheet
// Dependencies: [5246, 10451, 1999, 2]
// Exports: default

// Module 10450 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10451, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
