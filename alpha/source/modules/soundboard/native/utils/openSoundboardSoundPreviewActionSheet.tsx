// Module ID: 19586
// Function ID: 19587
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5376, 19587, 2118, 2]
// Exports: default

// Module 19586 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19587, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
