// Module ID: 10133
// Function ID: 10134
// Name: showUploadPreviewActionSheet
// Dependencies: [4801, 10134, 1987, 2]
// Exports: default

// Module 10133 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10134, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
