// Module ID: 10664
// Function ID: 10665
// Name: showUploadPreviewActionSheet
// Dependencies: [5404, 10665, 2118, 2]
// Exports: default

// Module 10664 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10665, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
