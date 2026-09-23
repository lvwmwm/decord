// Module ID: 10975
// Function ID: 10976
// Name: showUploadPreviewActionSheet
// Dependencies: [4794, 10976, 1980, 2]
// Exports: default

// Module 10975 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10976, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
