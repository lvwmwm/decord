// Module ID: 10790
// Function ID: 10791
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5060, 10791, 2000, 2]
// Exports: default

// Module 10790 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10791, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
