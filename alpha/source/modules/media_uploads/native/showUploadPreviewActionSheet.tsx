// Module ID: 9991
// Function ID: 9992
// Name: showUploadPreviewActionSheet
// Dependencies: [5055, 9992, 2000, 2]
// Exports: default

// Module 9991 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(9992, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
