// Module ID: 11530
// Function ID: 11531
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5253, 11531, 1995, 2]
// Exports: default

// Module 11530 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11531, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
