// Module ID: 10929
// Function ID: 10930
// Name: showUploadPreviewActionSheet
// Dependencies: [4755, 10930, 1980, 2]
// Exports: default

// Module 10929 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10930, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
