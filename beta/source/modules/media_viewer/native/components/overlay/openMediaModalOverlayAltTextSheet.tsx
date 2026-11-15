// Module ID: 11754
// Function ID: 11755
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5406, 11755, 2118, 2]
// Exports: default

// Module 11754 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11755, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
