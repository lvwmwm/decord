// Module ID: 18569
// Function ID: 18570
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5211, 18570, 1999, 2]
// Exports: default

// Module 18569 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18570, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
