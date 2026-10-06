// Module ID: 11557
// Function ID: 11558
// Name: openSoundmojiActionSheet
// Dependencies: [5809, 4860, 11558, 1987, 2]
// Exports: default

// Module 11557 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5809 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1987);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11558, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
