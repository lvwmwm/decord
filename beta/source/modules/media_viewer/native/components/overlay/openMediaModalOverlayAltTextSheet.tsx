// Module ID: 11151
// Function ID: 11152
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4854, 11152, 1987, 2]
// Exports: default

// Module 11151 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11152, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
