// Module ID: 10020
// Function ID: 10021
// Name: showUploadPreviewActionSheet
// Dependencies: [5056, 10021, 2000, 2]
// Exports: default

// Module 10020 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10021, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
