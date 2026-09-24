// Module ID: 12273
// Function ID: 12274
// Name: openSoundmojiActionSheet
// Dependencies: [5317, 4796, 12274, 1980, 2]
// Exports: default

// Module 12273 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12274, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
