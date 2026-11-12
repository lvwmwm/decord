// Module ID: 19592
// Function ID: 19593
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5406, 19593, 2118, 2]
// Exports: default

// Module 19592 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19593, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
