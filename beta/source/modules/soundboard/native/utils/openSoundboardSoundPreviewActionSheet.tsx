// Module ID: 19227
// Function ID: 19228
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5542, 19228, 2121, 2]
// Exports: default

// Module 19227 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(19228, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
