// Module ID: 10289
// Function ID: 10290
// Name: showUploadPreviewActionSheet
// Dependencies: [4809, 10290, 1981, 2]
// Exports: default

// Module 10289 (showUploadPreviewActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(10290, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
