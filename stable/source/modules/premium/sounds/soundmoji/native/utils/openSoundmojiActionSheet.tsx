// Module ID: 13426
// Function ID: 13427
// Name: openSoundmojiActionSheet
// Dependencies: [13427, 5258, 13428, 1994, 2]
// Exports: default

// Module 13426 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13427 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1994);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13428, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
