// Module ID: 11786
// Function ID: 11787
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4723, 11787, 1980, 2]
// Exports: default

// Module 11786 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11787, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
