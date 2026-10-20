// Module ID: 18251
// Function ID: 18252
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5171, 18252, 2002, 2]
// Exports: default

// Module 18251 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18252, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
