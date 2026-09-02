// Module ID: 10647
// Function ID: 10648
// Name: showUploadPreviewActionSheet
// Dependencies: [4445, 10648, 2008, 2]
// Exports: default

// Module 10647 (showUploadPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10648, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
