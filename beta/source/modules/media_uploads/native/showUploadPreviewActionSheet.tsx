// Module ID: 10320
// Function ID: 10321
// Name: showUploadPreviewActionSheet
// Dependencies: [5155, 10321, 2002, 2]
// Exports: default

// Module 10320 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10321, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
