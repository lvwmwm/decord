// Module ID: 19344
// Function ID: 19345
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5381, 19345, 2123, 2]
// Exports: default

// Module 19344 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19345, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
