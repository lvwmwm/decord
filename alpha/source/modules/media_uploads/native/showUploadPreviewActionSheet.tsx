// Module ID: 10386
// Function ID: 10387
// Name: showUploadPreviewActionSheet
// Dependencies: [5196, 10387, 2002, 2]
// Exports: default

// Module 10386 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10387, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
