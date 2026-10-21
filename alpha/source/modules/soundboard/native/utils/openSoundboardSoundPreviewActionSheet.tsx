// Module ID: 18355
// Function ID: 18356
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5192, 18356, 2002, 2]
// Exports: default

// Module 18355 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18356, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
