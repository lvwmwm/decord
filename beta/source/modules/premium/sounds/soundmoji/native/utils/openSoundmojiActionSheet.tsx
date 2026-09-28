// Module ID: 11413
// Function ID: 11414
// Name: openSoundmojiActionSheet
// Dependencies: [5325, 4800, 11414, 1981, 2]
// Exports: default

// Module 11413 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11414, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
