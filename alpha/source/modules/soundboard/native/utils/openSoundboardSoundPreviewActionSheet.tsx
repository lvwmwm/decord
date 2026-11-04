// Module ID: 19462
// Function ID: 19463
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5382, 19463, 2123, 2]
// Exports: default

// Module 19462 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19463, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
