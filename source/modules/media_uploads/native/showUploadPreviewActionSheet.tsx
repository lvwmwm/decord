// Module ID: 10051
// Function ID: 10052
// Name: showUploadPreviewActionSheet
// Dependencies: [4310, 10052, 2007, 2]
// Exports: default

// Module 10051 (showUploadPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10052, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
