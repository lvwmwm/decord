// Module ID: 10393
// Function ID: 10394
// Name: showUploadPreviewActionSheet
// Dependencies: [5196, 10394, 2002, 2]
// Exports: default

// Module 10393 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10394, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
