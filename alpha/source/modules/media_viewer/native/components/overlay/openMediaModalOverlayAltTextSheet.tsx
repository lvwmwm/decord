// Module ID: 11858
// Function ID: 11859
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5131, 11859, 2119, 2]
// Exports: default

// Module 11858 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11859, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
