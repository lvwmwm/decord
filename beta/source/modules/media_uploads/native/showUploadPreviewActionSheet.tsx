// Module ID: 10679
// Function ID: 10680
// Name: showUploadPreviewActionSheet
// Dependencies: [5406, 10680, 2118, 2]
// Exports: default

// Module 10679 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10680, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
