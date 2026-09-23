// Module ID: 12266
// Function ID: 12267
// Name: openSoundmojiActionSheet
// Dependencies: [5315, 4794, 12267, 1980, 2]
// Exports: default

// Module 12266 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12267, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
