// Module ID: 11413
// Function ID: 11414
// Name: openSoundmojiActionSheet
// Dependencies: [5325, 4800, 11414, 1981, 2]
// Exports: default

// Module 11413 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5325 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1981);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11414, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
