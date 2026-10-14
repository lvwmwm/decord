// Module ID: 10031
// Function ID: 10032
// Name: showUploadPreviewActionSheet
// Dependencies: [5060, 10032, 2000, 2]
// Exports: default

// Module 10031 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10032, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
