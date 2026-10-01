// Module ID: 16898
// Function ID: 16899
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4800, 16899, 1981, 2]
// Exports: default

// Module 16898 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(16899, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
