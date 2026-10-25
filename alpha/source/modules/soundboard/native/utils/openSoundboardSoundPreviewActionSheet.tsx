// Module ID: 18526
// Function ID: 18527
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5210, 18527, 2002, 2]
// Exports: default

// Module 18526 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18527, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
