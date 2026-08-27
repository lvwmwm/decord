// Module ID: 11050
// Function ID: 11051
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4412, 11051, 2009, 2]
// Exports: default

// Module 11050 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11051, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
