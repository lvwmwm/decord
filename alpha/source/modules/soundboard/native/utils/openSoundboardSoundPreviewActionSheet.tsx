// Module ID: 18489
// Function ID: 18490
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5208, 18490, 2002, 2]
// Exports: default

// Module 18489 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5208 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18490, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
