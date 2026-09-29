// Module ID: 11815
// Function ID: 11816
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4755, 11816, 1980, 2]
// Exports: default

// Module 11815 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11816, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
