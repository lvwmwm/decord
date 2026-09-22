// Module ID: 10762
// Function ID: 10763
// Name: showUploadPreviewActionSheet
// Dependencies: [4603, 10763, 1896, 2]
// Exports: default

// Module 10762 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10763, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
