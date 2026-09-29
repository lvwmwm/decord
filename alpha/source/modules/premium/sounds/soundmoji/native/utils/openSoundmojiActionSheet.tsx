// Module ID: 11582
// Function ID: 11583
// Name: openSoundmojiActionSheet
// Dependencies: [5491, 4800, 11583, 1981, 2]
// Exports: default

// Module 11582 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11583, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
