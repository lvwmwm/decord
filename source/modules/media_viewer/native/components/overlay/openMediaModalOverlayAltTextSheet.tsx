// Module ID: 11004
// Function ID: 11005
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4271, 11005, 1988, 2]
// Exports: default

// Module 11004 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(11005, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
