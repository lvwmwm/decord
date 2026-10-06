// Module ID: 11164
// Function ID: 11165
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [4860, 11165, 1987, 2]
// Exports: default

// Module 11164 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11165, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
