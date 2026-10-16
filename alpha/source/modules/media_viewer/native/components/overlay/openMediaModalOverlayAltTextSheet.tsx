// Module ID: 11029
// Function ID: 11030
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5118, 11030, 2002, 2]
// Exports: default

// Module 11029 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11030, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
