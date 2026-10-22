// Module ID: 11195
// Function ID: 11196
// Name: openMediaModalOverlayAltTextSheet
// Dependencies: [5196, 11196, 2002, 2]
// Exports: default

// Module 11195 (openMediaModalOverlayAltTextSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/openMediaModalOverlayAltTextSheet.tsx");

export default function openMediaModalOverlayAltTextSheet(description) {
  description = description.description;
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(11196, dependencyMap.paths), "MediaModalOverlayAltTextSheet", { description });
};
