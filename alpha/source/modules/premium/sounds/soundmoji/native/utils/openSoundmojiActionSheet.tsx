// Module ID: 11619
// Function ID: 11620
// Name: openSoundmojiActionSheet
// Dependencies: [11620, 5054, 11621, 1999, 2]
// Exports: default

// Module 11619 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 11620 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1999);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11621, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
