// Module ID: 11633
// Function ID: 11634
// Name: showUploadPreviewActionSheet
// Dependencies: [5552, 11634, 2121, 2]
// Exports: default

// Module 11633 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11634, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
