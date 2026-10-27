// Module ID: 12946
// Function ID: 12947
// Name: openSoundmojiActionSheet
// Dependencies: [12947, 5210, 12948, 2002, 2]
// Exports: default

// Module 12946 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12947 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12948, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
