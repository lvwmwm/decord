// Module ID: 17903
// Function ID: 17904
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5008, 17904, 2119, 2]
// Exports: default

// Module 17903 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(17904, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
