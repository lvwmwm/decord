// Module ID: 12215
// Function ID: 12216
// Name: openSoundmojiActionSheet
// Dependencies: [5261, 4755, 12216, 1980, 2]
// Exports: default

// Module 12215 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4755 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12216, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
