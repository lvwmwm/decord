// Module ID: 11005
// Function ID: 11006
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4271, 11006, 1988, 2]
// Exports: default

// Module 11005 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(11006, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
