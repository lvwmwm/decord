// Module ID: 11227
// Function ID: 11228
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5208, 11228, 2002, 2]
// Exports: default

// Module 11227 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11228, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
