// Module ID: 10021
// Function ID: 10022
// Name: showUploadPreviewActionSheet
// Dependencies: [5056, 10022, 2000, 2]
// Exports: default

// Module 10021 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10022, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
