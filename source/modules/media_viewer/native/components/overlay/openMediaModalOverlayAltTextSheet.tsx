// Module ID: 10978
// Function ID: 10979
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4310, 10979, 2007, 2]
// Exports: default

// Module 10978 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10979, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
