// Module ID: 19050
// Function ID: 19051
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5247, 19051, 2000, 2]
// Exports: default

// Module 19050 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19051, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
