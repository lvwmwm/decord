// Module ID: 10448
// Function ID: 10449
// Name: showUploadPreviewActionSheet
// Dependencies: [5242, 10449, 2002, 2]
// Exports: default

// Module 10448 (showUploadPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10449, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
