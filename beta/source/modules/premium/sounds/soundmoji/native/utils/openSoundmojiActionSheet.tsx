// Module ID: 12098
// Function ID: 12099
// Name: openSoundmojiActionSheet
// Dependencies: [5263, 4757, 12099, 1984, 2]
// Exports: default

// Module 12098 (openSoundmojiActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4757 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12099, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
  }
};
