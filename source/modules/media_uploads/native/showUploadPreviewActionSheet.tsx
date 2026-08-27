// Module ID: 10345
// Function ID: 10346
// Name: showUploadPreviewActionSheet
// Dependencies: [4412, 10346, 2009, 2]
// Exports: default

// Module 10345 (showUploadPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10346, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
