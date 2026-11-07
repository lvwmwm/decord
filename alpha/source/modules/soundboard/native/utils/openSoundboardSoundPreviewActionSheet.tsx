// Module ID: 19544
// Function ID: 19545
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5374, 19545, 2118, 2]
// Exports: default

// Module 19544 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19545, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
