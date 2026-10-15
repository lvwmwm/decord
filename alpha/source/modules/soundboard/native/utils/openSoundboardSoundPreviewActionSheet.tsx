// Module ID: 18113
// Function ID: 18114
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5115, 18114, 2000, 2]
// Exports: default

// Module 18113 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18114, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
