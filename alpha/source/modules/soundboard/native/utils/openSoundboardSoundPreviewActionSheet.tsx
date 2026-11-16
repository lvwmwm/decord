// Module ID: 19224
// Function ID: 19225
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5542, 19225, 2121, 2]
// Exports: default

// Module 19224 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(19225, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
