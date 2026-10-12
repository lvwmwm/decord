// Module ID: 17833
// Function ID: 17834
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5056, 17834, 2000, 2]
// Exports: default

// Module 17833 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(17834, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
