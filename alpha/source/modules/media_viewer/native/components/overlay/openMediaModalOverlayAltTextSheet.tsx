// Module ID: 11238
// Function ID: 11239
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4809, 11239, 1981, 2]
// Exports: default

// Module 11238 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11239, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
