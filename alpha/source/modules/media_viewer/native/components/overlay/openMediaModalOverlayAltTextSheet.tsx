// Module ID: 11286
// Function ID: 11287
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5054, 11287, 1999, 2]
// Exports: default

// Module 11286 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11287, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
