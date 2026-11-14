// Module ID: 19222
// Function ID: 19223
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5552, 19223, 2121, 2]
// Exports: default

// Module 19222 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(19223, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
