// Module ID: 11134
// Function ID: 11135
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5171, 11135, 2002, 2]
// Exports: default

// Module 11134 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11135, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
