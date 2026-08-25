// Module ID: 11092
// Function ID: 11093
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4347, 11093, 2009, 2]
// Exports: default

// Module 11092 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11093, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
