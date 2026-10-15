// Module ID: 11014
// Function ID: 11015
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5115, 11015, 2000, 2]
// Exports: default

// Module 11014 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11015, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
