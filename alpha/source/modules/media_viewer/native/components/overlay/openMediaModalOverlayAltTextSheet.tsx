// Module ID: 10062
// Function ID: 10063
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5037, 10063, 2121, 2]
// Exports: default

// Module 10062 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10063, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
