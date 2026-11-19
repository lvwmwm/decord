// Module ID: 11556
// Function ID: 11557
// Name: showUploadPreviewActionSheet
// Dependencies: [5006, 11557, 2121, 2]
// Exports: default

// Module 11556 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11557, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
