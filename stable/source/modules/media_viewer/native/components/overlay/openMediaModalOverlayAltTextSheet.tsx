// Module ID: 11668
// Function ID: 11669
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4603, 11669, 1896, 2]
// Exports: default

// Module 11668 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11669, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
