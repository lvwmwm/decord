// Module ID: 18076
// Function ID: 18077
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5006, 18077, 2121, 2]
// Exports: default

// Module 18076 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(18077, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
