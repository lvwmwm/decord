// Module ID: 10255
// Function ID: 10256
// Name: showUploadPreviewActionSheet
// Dependencies: [5118, 10256, 2002, 2]
// Exports: default

// Module 10255 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10256, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
