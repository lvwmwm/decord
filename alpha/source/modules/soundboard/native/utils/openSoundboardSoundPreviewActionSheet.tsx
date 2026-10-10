// Module ID: 17776
// Function ID: 17777
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5056, 17777, 2000, 2]
// Exports: default

// Module 17776 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(17777, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
