// Module ID: 18222
// Function ID: 18223
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5155, 18223, 2002, 2]
// Exports: default

// Module 18222 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18223, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
