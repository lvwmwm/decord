// Module ID: 19130
// Function ID: 19131
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5253, 19131, 1995, 2]
// Exports: default

// Module 19130 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19131, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
