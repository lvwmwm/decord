// Module ID: 11234
// Function ID: 11235
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4830, 11235, 1981, 2]
// Exports: default

// Module 11234 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11235, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
