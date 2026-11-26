// Module ID: 12005
// Function ID: 12006
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5257, 12006, 2120, 2]
// Exports: default

// Module 12005 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12006, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
