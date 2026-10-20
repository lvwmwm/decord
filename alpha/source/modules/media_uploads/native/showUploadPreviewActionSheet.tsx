// Module ID: 10334
// Function ID: 10335
// Name: showUploadPreviewActionSheet
// Dependencies: [5171, 10335, 2002, 2]
// Exports: default

// Module 10334 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10335, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
