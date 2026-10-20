// Module ID: 10345
// Function ID: 10346
// Name: showUploadPreviewActionSheet
// Dependencies: [5171, 10346, 2002, 2]
// Exports: default

// Module 10345 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10346, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
