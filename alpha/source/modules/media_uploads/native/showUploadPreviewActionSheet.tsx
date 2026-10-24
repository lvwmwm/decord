// Module ID: 10416
// Function ID: 10417
// Name: showUploadPreviewActionSheet
// Dependencies: [5210, 10417, 2002, 2]
// Exports: default

// Module 10416 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10417, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
