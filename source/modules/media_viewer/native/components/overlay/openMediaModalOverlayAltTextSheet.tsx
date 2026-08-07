// Module ID: 10938
// Function ID: 10939
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4270, 10939, 1988, 2]
// Exports: default

// Module 10938 (openMediaModalOverlayAltTextSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(10939, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
