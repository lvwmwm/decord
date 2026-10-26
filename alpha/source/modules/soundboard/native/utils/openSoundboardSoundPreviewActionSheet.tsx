// Module ID: 18525
// Function ID: 18526
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5210, 18526, 2002, 2]
// Exports: default

// Module 18525 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18526, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
