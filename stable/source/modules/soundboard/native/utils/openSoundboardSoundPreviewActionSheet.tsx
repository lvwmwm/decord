// Module ID: 19595
// Function ID: 19596
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5406, 19596, 2118, 2]
// Exports: default

// Module 19595 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19596, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
