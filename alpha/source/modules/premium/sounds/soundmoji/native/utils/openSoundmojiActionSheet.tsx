// Module ID: 12190
// Function ID: 12191
// Name: openSoundmojiActionSheet
// Dependencies: [5231, 4724, 12191, 1980, 2]
// Exports: default

// Module 12190 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12191, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
