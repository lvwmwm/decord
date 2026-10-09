// Module ID: 17704
// Function ID: 17705
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5055, 17705, 2000, 2]
// Exports: default

// Module 17704 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(17705, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
