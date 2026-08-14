// Module ID: 10062
// Function ID: 10063
// Name: showUploadPreviewActionSheet
// Dependencies: [4310, 10063, 2007, 2]
// Exports: default

// Module 10062 (showUploadPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10063, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
