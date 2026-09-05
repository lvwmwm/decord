// Module ID: 11535
// Function ID: 11536
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4527, 11536, 1896, 2]
// Exports: default

// Module 11535 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11536, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
