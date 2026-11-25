// Module ID: 11957
// Function ID: 11958
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5226, 11958, 2119, 2]
// Exports: default

// Module 11957 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11958, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
