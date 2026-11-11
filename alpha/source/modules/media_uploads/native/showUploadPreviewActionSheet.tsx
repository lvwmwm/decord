// Module ID: 11572
// Function ID: 11573
// Name: showUploadPreviewActionSheet
// Dependencies: [5489, 11573, 2118, 2]
// Exports: default

// Module 11572 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11573, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
