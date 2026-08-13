// Module ID: 10979
// Function ID: 10980
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4310, 10980, 2007, 2]
// Exports: default

// Module 10979 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(10980, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
