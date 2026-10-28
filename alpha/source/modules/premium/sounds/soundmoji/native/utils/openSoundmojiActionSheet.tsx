// Module ID: 13005
// Function ID: 13006
// Name: openSoundmojiActionSheet
// Dependencies: [13006, 5246, 13007, 1999, 2]
// Exports: default

// Module 13005 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13006 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1999);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13007, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
