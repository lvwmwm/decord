// Module ID: 14140
// Function ID: 14141
// Name: openSoundmojiActionSheet
// Dependencies: [14141, 5489, 14142, 2118, 2]
// Exports: default

// Module 14140 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 14141 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14142, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
