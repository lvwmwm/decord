// Module ID: 10157
// Function ID: 10158
// Name: showUploadPreviewActionSheet
// Dependencies: [4347, 10158, 2009, 2]
// Exports: default

// Module 10157 (showUploadPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10158, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
