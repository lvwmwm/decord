// Module ID: 11326
// Function ID: 11327
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5247, 11327, 2000, 2]
// Exports: default

// Module 11326 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11327, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
