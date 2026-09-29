// Module ID: 10263
// Function ID: 10264
// Name: showUploadPreviewActionSheet
// Dependencies: [4800, 10264, 1981, 2]
// Exports: default

// Module 10263 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10264, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
