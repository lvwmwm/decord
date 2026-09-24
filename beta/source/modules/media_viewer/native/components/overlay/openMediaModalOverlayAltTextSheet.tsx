// Module ID: 11690
// Function ID: 11691
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4757, 11691, 1984, 2]
// Exports: default

// Module 11690 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11691, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
