// Module ID: 11026
// Function ID: 11027
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5118, 11027, 2002, 2]
// Exports: default

// Module 11026 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11027, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
