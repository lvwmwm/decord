// Module ID: 10940
// Function ID: 10941
// Name: showUploadPreviewActionSheet
// Dependencies: [5131, 10941, 2119, 2]
// Exports: default

// Module 10940 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10941, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
