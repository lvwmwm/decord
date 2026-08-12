// Module ID: 11063
// Function ID: 11064
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4312, 11064, 2007, 2]
// Exports: default

// Module 11063 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(11064, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
