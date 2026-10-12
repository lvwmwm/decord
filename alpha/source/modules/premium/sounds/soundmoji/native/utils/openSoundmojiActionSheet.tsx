// Module ID: 11600
// Function ID: 11601
// Name: openSoundmojiActionSheet
// Dependencies: [11601, 5056, 11602, 2000, 2]
// Exports: default

// Module 11600 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 11601 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11602, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
