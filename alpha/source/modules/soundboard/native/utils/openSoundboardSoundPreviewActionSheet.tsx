// Module ID: 17552
// Function ID: 17553
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5054, 17553, 1999, 2]
// Exports: default

// Module 17552 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(17553, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
