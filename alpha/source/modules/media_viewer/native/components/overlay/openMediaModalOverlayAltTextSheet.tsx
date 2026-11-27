// Module ID: 12013
// Function ID: 12014
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5257, 12014, 2120, 2]
// Exports: default

// Module 12013 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12014, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
