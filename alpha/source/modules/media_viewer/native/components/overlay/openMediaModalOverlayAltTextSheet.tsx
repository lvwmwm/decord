// Module ID: 11766
// Function ID: 11767
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5384, 11767, 2123, 2]
// Exports: default

// Module 11766 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11767, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
