// Module ID: 11723
// Function ID: 11724
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5374, 11724, 2118, 2]
// Exports: default

// Module 11723 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11724, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
