// Module ID: 13226
// Function ID: 13227
// Name: openSoundmojiActionSheet
// Dependencies: [13227, 5247, 13228, 2000, 2]
// Exports: default

// Module 13226 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13227 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13228, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
