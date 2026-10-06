// Module ID: 16882
// Function ID: 16883
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4801, 16883, 1987, 2]
// Exports: default

// Module 16882 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(16883, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
