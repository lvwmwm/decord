// Module ID: 11232
// Function ID: 11233
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5210, 11233, 2002, 2]
// Exports: default

// Module 11232 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11233, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
