// Module ID: 19485
// Function ID: 19486
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5404, 19486, 2118, 2]
// Exports: default

// Module 19485 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19486, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
