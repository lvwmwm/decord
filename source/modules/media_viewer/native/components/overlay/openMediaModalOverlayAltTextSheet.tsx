// Module ID: 11164
// Function ID: 11165
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4411, 11165, 2009, 2]
// Exports: default

// Module 11164 (openMediaModalOverlayAltTextSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11165, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
