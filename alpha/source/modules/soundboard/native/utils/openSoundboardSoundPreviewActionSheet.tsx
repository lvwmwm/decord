// Module ID: 19269
// Function ID: 19270
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [5546, 19270, 2121, 2]
// Exports: default

// Module 19269 (openSoundboardSoundPreviewActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channel, sound, analyticsSource };
  obj.openLazy(asyncRequire(19270, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj2, "stack");
};
