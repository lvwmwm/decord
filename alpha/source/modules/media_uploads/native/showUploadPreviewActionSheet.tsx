// Module ID: 11039
// Function ID: 11040
// Name: showUploadPreviewActionSheet
// Dependencies: [5226, 11040, 2119, 2]
// Exports: default

// Module 11039 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11040, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
