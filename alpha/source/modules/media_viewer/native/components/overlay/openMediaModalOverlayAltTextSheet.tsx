// Module ID: 11229
// Function ID: 11230
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5210, 11230, 2002, 2]
// Exports: default

// Module 11229 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11230, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
