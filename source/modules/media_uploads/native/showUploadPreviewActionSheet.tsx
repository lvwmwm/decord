// Module ID: 9940
// Function ID: 9941
// Name: showUploadPreviewActionSheet
// Dependencies: [4270, 9941, 1988, 2]
// Exports: default

// Module 9940 (showUploadPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(9941, dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
