// Module ID: 10781
// Function ID: 10782
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5546, 10782, 2121, 2]
// Exports: default

// Module 10781 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10782, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
