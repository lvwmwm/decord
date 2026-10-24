// Module ID: 18521
// Function ID: 18522
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5210, 18522, 2002, 2]
// Exports: default

// Module 18521 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18522, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
