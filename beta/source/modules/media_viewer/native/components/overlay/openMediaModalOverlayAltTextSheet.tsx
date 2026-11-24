// Module ID: 10163
// Function ID: 10164
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5127, 10164, 2119, 2]
// Exports: default

// Module 10163 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10164, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
