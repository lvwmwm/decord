// Module ID: 18182
// Function ID: 18183
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5226, 18183, 2119, 2]
// Exports: default

// Module 18182 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(18183, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
