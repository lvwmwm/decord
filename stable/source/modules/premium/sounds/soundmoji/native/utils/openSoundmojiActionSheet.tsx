// Module ID: 12066
// Function ID: 12067
// Name: openSoundmojiActionSheet
// Dependencies: [5098, 4603, 12067, 1896, 2]
// Exports: default

// Module 12066 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12067, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
