// Module ID: 17873
// Function ID: 17874
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5060, 17874, 2000, 2]
// Exports: default

// Module 17873 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(17874, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
