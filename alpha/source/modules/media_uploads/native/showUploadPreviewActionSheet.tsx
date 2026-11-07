// Module ID: 10647
// Function ID: 10648
// Name: showUploadPreviewActionSheet
// Dependencies: [5374, 10648, 2118, 2]
// Exports: default

// Module 10647 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10648, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
