// Module ID: 10085
// Function ID: 10086
// Name: showUploadPreviewActionSheet
// Dependencies: [4796, 10086, 1980, 2]
// Exports: default

// Module 10085 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10086, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
