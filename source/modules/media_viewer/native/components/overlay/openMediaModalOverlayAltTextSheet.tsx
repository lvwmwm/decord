// Module ID: 10995
// Function ID: 10996
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4310, 10996, 2007, 2]
// Exports: default

// Module 10995 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10996, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
