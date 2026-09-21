// Module ID: 12186
// Function ID: 12187
// Name: openSoundmojiActionSheet
// Dependencies: [5229, 4723, 12187, 1980, 2]
// Exports: default

// Module 12186 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12187, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
