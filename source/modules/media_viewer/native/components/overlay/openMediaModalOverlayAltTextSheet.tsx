// Module ID: 10835
// Function ID: 84121
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4099, 10836, 1935, 2]
// Exports: default

// Module 10835 (openMediaModalOverlayAltTextSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(10836, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
