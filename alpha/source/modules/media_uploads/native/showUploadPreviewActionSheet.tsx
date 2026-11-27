// Module ID: 11086
// Function ID: 11087
// Name: showUploadPreviewActionSheet
// Dependencies: [5257, 11087, 2120, 2]
// Exports: default

// Module 11086 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11087, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
