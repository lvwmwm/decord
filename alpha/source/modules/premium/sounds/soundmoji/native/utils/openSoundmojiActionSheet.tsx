// Module ID: 12621
// Function ID: 12622
// Name: openSoundmojiActionSheet
// Dependencies: [12622, 5115, 12623, 2000, 2]
// Exports: default

// Module 12621 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12622 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12623, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
