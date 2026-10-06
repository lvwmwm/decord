// Module ID: 11288
// Function ID: 11289
// Name: openSoundmojiActionSheet
// Dependencies: [5326, 4801, 11289, 1987, 2]
// Exports: default

// Module 11288 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5326 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1987);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11289, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
