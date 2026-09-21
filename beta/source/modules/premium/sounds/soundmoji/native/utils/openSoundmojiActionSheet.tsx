// Module ID: 12062
// Function ID: 12063
// Name: openSoundmojiActionSheet
// Dependencies: [5231, 4725, 12063, 1984, 2]
// Exports: default

// Module 12062 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12063, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
