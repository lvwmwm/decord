// Module ID: 10562
// Function ID: 10563
// Name: showUploadPreviewActionSheet
// Dependencies: [4448, 10563, 2008, 2]
// Exports: default

// Module 10562 (showUploadPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(10563, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
