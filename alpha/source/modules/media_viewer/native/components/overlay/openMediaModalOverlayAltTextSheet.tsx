// Module ID: 11702
// Function ID: 11703
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5381, 11703, 2123, 2]
// Exports: default

// Module 11702 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11703, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
