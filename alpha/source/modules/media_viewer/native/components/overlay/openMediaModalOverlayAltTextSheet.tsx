// Module ID: 11757
// Function ID: 11758
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5382, 11758, 2123, 2]
// Exports: default

// Module 11757 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11758, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
