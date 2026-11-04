// Module ID: 11758
// Function ID: 11759
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5382, 11759, 2123, 2]
// Exports: default

// Module 11758 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11759, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
