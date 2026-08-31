// Module ID: 10387
// Function ID: 10388
// Name: showUploadPreviewActionSheet
// Dependencies: [4415, 10388, 2009, 2]
// Exports: default

// Module 10387 (showUploadPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10388, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
