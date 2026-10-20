// Module ID: 18274
// Function ID: 18275
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5171, 18275, 2002, 2]
// Exports: default

// Module 18274 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(18275, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
