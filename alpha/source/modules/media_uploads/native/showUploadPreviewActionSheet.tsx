// Module ID: 11498
// Function ID: 11499
// Name: showUploadPreviewActionSheet
// Dependencies: [5008, 11499, 2119, 2]
// Exports: default

// Module 11498 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11499, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
