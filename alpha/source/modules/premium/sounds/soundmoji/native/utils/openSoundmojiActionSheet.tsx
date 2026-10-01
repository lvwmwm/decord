// Module ID: 11624
// Function ID: 11625
// Name: openSoundmojiActionSheet
// Dependencies: [5509, 4809, 11625, 1981, 2]
// Exports: default

// Module 11624 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11625, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
