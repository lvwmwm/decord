// Module ID: 18218
// Function ID: 18219
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5155, 18219, 2002, 2]
// Exports: default

// Module 18218 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18219, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
