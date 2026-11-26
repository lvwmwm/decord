// Module ID: 18241
// Function ID: 18242
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5257, 18242, 2120, 2]
// Exports: default

// Module 18241 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(18242, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
