// Module ID: 10727
// Function ID: 10728
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4342, 10728, 2007, 2]
// Exports: default

// Module 10727 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(10728, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
