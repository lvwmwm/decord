// Module ID: 12354
// Function ID: 12355
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5489, 12355, 2118, 2]
// Exports: default

// Module 12354 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(12355, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
