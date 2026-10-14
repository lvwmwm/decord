// Module ID: 11544
// Function ID: 11545
// Name: openSoundmojiActionSheet
// Dependencies: [5802, 4854, 11545, 1987, 2]
// Exports: default

// Module 11544 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5802 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1987);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11545, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
