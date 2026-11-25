// Module ID: 11623
// Function ID: 11624
// Name: showUploadPreviewActionSheet
// Dependencies: [5127, 11624, 2119, 2]
// Exports: default

// Module 11623 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11624, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
