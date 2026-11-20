// Module ID: 10043
// Function ID: 10044
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5008, 10044, 2119, 2]
// Exports: default

// Module 10043 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(10044, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
