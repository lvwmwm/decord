// Module ID: 11790
// Function ID: 11791
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4724, 11791, 1980, 2]
// Exports: default

// Module 11790 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11791, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
