// Module ID: 19493
// Function ID: 19494
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5384, 19494, 2123, 2]
// Exports: default

// Module 19493 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19494, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
