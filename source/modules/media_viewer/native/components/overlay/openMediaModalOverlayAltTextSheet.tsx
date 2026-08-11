// Module ID: 11010
// Function ID: 11011
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4271, 11011, 2007, 2]
// Exports: default

// Module 11010 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(11011, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
