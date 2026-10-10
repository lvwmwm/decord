// Module ID: 10687
// Function ID: 10688
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5056, 10688, 2000, 2]
// Exports: default

// Module 10687 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10688, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
