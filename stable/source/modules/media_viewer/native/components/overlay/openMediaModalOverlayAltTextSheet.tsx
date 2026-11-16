// Module ID: 11755
// Function ID: 11756
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5406, 11756, 2118, 2]
// Exports: default

// Module 11755 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11756, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
