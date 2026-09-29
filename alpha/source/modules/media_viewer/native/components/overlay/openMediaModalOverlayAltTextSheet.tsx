// Module ID: 11198
// Function ID: 11199
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4800, 11199, 1981, 2]
// Exports: default

// Module 11198 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11199, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
