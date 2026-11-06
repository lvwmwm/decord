// Module ID: 11732
// Function ID: 11733
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5404, 11733, 2118, 2]
// Exports: default

// Module 11732 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11733, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
