// Module ID: 12449
// Function ID: 12450
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5552, 12450, 2121, 2]
// Exports: default

// Module 12449 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12450, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
