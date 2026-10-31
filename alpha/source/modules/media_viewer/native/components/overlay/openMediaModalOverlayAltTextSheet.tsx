// Module ID: 11564
// Function ID: 11565
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5258, 11565, 1994, 2]
// Exports: default

// Module 11564 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11565, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
