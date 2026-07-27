// Module ID: 10836
// Function ID: 84126
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4099, 10837, 1935, 2]
// Exports: default

// Module 10836 (openMediaModalOverlayAltTextSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(10837, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
