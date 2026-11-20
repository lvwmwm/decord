// Module ID: 12451
// Function ID: 12452
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5542, 12452, 2121, 2]
// Exports: default

// Module 12451 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12452, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
