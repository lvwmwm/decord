// Module ID: 11566
// Function ID: 11567
// Name: showUploadPreviewActionSheet
// Dependencies: [5489, 11567, 2118, 2]
// Exports: default

// Module 11566 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11567, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
