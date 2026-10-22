// Module ID: 18423
// Function ID: 18424
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5196, 18424, 2002, 2]
// Exports: default

// Module 18423 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18424, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
