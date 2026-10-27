// Module ID: 10418
// Function ID: 10419
// Name: showUploadPreviewActionSheet
// Dependencies: [5211, 10419, 1999, 2]
// Exports: default

// Module 10418 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10419, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
