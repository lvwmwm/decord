// Module ID: 18909
// Function ID: 18910
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5406, 18910, 2118, 2]
// Exports: default

// Module 18909 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18910, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
