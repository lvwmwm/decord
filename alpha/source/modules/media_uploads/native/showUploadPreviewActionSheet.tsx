// Module ID: 10508
// Function ID: 10509
// Name: showUploadPreviewActionSheet
// Dependencies: [5253, 10509, 1995, 2]
// Exports: default

// Module 10508 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10509, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
