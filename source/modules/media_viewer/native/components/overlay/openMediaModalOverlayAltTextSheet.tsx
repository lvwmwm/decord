// Module ID: 11134
// Function ID: 11135
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4445, 11135, 2009, 2]
// Exports: default

// Module 11134 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11135, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
