// Module ID: 18070
// Function ID: 18071
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5131, 18071, 2119, 2]
// Exports: default

// Module 18070 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(18071, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
