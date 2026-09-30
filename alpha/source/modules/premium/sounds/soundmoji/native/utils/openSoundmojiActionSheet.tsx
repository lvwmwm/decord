// Module ID: 11616
// Function ID: 11617
// Name: openSoundmojiActionSheet
// Dependencies: [5521, 4830, 11617, 1981, 2]
// Exports: default

// Module 11616 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11617, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
