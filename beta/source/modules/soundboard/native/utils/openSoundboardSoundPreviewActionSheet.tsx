// Module ID: 18563
// Function ID: 18564
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5242, 18564, 2002, 2]
// Exports: default

// Module 18563 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18564, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
