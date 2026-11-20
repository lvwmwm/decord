// Module ID: 14245
// Function ID: 14246
// Name: openSoundmojiActionSheet
// Dependencies: [14246, 5542, 14247, 2121, 2]
// Exports: default

// Module 14245 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5542 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 14246 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14247, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
