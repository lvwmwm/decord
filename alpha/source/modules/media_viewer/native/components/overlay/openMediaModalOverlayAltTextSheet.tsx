// Module ID: 11866
// Function ID: 11867
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4794, 11867, 1980, 2]
// Exports: default

// Module 11866 (openMediaModalOverlayAltTextSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11867, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description: description.description });
};
