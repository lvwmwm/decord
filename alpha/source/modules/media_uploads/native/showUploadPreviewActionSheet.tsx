// Module ID: 11085
// Function ID: 11086
// Name: showUploadPreviewActionSheet
// Dependencies: [5257, 11086, 2120, 2]
// Exports: default

// Module 11085 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11086, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
