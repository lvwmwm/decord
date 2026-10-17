// Module ID: 11088
// Function ID: 11089
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5155, 11089, 2002, 2]
// Exports: default

// Module 11088 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11089, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
