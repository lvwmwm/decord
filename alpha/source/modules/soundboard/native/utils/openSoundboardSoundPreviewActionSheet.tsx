// Module ID: 18157
// Function ID: 18158
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5118, 18158, 2002, 2]
// Exports: default

// Module 18157 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18158, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
