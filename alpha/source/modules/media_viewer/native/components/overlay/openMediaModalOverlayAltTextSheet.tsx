// Module ID: 11228
// Function ID: 11229
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5210, 11229, 2002, 2]
// Exports: default

// Module 11228 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11229, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
