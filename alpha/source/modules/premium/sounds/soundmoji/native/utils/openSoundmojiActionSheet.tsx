// Module ID: 12407
// Function ID: 12408
// Name: openSoundmojiActionSheet
// Dependencies: [12408, 5037, 12409, 2121, 2]
// Exports: default

// Module 12407 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5037 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12408 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12409, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
