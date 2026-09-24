// Module ID: 10981
// Function ID: 10982
// Name: showUploadPreviewActionSheet
// Dependencies: [4796, 10982, 1980, 2]
// Exports: default

// Module 10981 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10982, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
