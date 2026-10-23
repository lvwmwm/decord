// Module ID: 10415
// Function ID: 10416
// Name: showUploadPreviewActionSheet
// Dependencies: [5208, 10416, 2002, 2]
// Exports: default

// Module 10415 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10416, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
