// Module ID: 9972
// Function ID: 9973
// Name: showUploadPreviewActionSheet
// Dependencies: [5054, 9973, 1999, 2]
// Exports: default

// Module 9972 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9973, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
