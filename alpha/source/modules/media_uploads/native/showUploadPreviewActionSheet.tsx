// Module ID: 10297
// Function ID: 10298
// Name: showUploadPreviewActionSheet
// Dependencies: [4830, 10298, 1981, 2]
// Exports: default

// Module 10297 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10298, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
