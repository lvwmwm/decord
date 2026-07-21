// Module ID: 9642
// Function ID: 75091
// Name: showUploadPreviewActionSheet
// Dependencies: []
// Exports: default

// Module 9642 (showUploadPreviewActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/media_uploads/native/showUploadPreviewActionSheet.tsx");

export default function showUploadPreviewActionSheet(arg0) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "UploadPreviewActionSheet", arg0);
};
