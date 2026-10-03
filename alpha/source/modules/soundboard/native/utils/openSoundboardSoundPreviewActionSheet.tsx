// Module ID: 17218
// Function ID: 17219
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4854, 17219, 1987, 2]
// Exports: default

// Module 17218 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(17219, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
