// Module ID: 10528
// Function ID: 10529
// Name: showUploadPreviewActionSheet
// Dependencies: [5258, 10529, 1994, 2]
// Exports: default

// Module 10528 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10529, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
