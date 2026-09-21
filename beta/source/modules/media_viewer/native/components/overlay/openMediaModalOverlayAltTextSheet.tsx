// Module ID: 11654
// Function ID: 11655
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4725, 11655, 1984, 2]
// Exports: default

// Module 11654 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11655, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
