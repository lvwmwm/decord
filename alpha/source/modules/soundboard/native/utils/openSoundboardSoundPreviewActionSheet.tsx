// Module ID: 18083
// Function ID: 18084
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5037, 18084, 2121, 2]
// Exports: default

// Module 18083 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(18084, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
