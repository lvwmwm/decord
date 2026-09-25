// Module ID: 11015
// Function ID: 11016
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4796, 11016, 1980, 2]
// Exports: default

// Module 11015 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11016, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
