// Module ID: 11272
// Function ID: 11273
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5246, 11273, 1999, 2]
// Exports: default

// Module 11272 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11273, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
