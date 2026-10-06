// Module ID: 10896
// Function ID: 10897
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4801, 10897, 1987, 2]
// Exports: default

// Module 10896 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10897, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
