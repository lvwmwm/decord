// Module ID: 19775
// Function ID: 19776
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5489, 19776, 2118, 2]
// Exports: default

// Module 19775 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequire(19776, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2);
};
