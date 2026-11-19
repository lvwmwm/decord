// Module ID: 12390
// Function ID: 12391
// Name: openSoundmojiActionSheet
// Dependencies: [12391, 5006, 12392, 2121, 2]
// Exports: default

// Module 12390 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12391 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12392, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
