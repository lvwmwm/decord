// Module ID: 10965
// Function ID: 10966
// Name: showUploadPreviewActionSheet
// Dependencies: [4757, 10966, 1984, 2]
// Exports: default

// Module 10965 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10966, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
