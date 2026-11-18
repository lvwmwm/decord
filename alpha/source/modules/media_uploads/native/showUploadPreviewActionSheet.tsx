// Module ID: 11578
// Function ID: 11579
// Name: showUploadPreviewActionSheet
// Dependencies: [5037, 11579, 2121, 2]
// Exports: default

// Module 11578 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11579, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
