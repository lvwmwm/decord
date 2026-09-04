// Module ID: 11467
// Function ID: 11468
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4448, 11468, 2008, 2]
// Exports: default

// Module 11467 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11468, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
