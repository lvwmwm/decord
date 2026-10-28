// Module ID: 11263
// Function ID: 11264
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5242, 11264, 2002, 2]
// Exports: default

// Module 11263 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11264, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
