// Module ID: 10874
// Function ID: 84247
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4133, 10875, 1935, 2]
// Exports: default

// Module 10874 (openMediaModalOverlayAltTextSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(10875, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
