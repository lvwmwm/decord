// Module ID: 10653
// Function ID: 10654
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5055, 10654, 2000, 2]
// Exports: default

// Module 10653 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10654, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
