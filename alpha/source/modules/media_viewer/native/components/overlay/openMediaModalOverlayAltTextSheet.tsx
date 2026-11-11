// Module ID: 12360
// Function ID: 12361
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5489, 12361, 2118, 2]
// Exports: default

// Module 12360 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12361, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
