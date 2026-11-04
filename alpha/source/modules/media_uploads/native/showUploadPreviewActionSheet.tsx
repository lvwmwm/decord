// Module ID: 10706
// Function ID: 10707
// Name: showUploadPreviewActionSheet
// Dependencies: [5382, 10707, 2123, 2]
// Exports: default

// Module 10706 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10707, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
