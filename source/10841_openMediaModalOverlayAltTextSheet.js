// Module ID: 10841
// Function ID: 84246
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: []
// Exports: default

// Module 10841 (openMediaModalOverlayAltTextSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
