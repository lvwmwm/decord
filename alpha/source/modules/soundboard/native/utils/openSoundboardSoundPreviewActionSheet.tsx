// Module ID: 18031
// Function ID: 18032
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5127, 18032, 2119, 2]
// Exports: default

// Module 18031 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(18032, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
