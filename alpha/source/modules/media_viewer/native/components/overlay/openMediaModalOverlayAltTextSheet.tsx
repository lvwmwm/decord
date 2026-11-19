// Module ID: 10040
// Function ID: 10041
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5006, 10041, 2121, 2]
// Exports: default

// Module 10040 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10041, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
