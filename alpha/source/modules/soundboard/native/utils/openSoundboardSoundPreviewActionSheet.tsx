// Module ID: 19186
// Function ID: 19187
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5258, 19187, 1994, 2]
// Exports: default

// Module 19186 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19187, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
