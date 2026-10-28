// Module ID: 18817
// Function ID: 18818
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5246, 18818, 1999, 2]
// Exports: default

// Module 18817 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18818, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
