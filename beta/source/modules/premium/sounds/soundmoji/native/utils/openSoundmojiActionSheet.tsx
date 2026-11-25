// Module ID: 12485
// Function ID: 12486
// Name: openSoundmojiActionSheet
// Dependencies: [12486, 5127, 12487, 2119, 2]
// Exports: default

// Module 12485 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12486 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12487, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
