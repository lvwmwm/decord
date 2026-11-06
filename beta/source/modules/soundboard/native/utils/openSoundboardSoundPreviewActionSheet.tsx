// Module ID: 19181
// Function ID: 19182
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5258, 19182, 1994, 2]
// Exports: default

// Module 19181 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19182, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
