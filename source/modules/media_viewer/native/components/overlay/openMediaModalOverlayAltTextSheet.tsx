// Module ID: 10912
// Function ID: 10913
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4161, 10913, 1959, 2]
// Exports: default

// Module 10912 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(10913, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
