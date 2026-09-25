// Module ID: 11399
// Function ID: 11400
// Name: openSoundmojiActionSheet
// Dependencies: [5318, 4796, 11400, 1980, 2]
// Exports: default

// Module 11399 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11400, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
