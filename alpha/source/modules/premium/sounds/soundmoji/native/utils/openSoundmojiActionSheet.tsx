// Module ID: 13562
// Function ID: 13563
// Name: openSoundmojiActionSheet
// Dependencies: [13563, 5381, 13564, 2123, 2]
// Exports: default

// Module 13562 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13563 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13564, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
