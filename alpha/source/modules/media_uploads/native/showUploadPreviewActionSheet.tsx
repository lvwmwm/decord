// Module ID: 12296
// Function ID: 12297
// Name: showUploadPreviewActionSheet
// Dependencies: [5546, 12297, 2121, 2]
// Exports: default

// Module 12296 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12297, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
