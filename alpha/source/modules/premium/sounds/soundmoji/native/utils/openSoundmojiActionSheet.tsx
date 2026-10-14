// Module ID: 12386
// Function ID: 12387
// Name: openSoundmojiActionSheet
// Dependencies: [12387, 5060, 12388, 2000, 2]
// Exports: default

// Module 12386 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12387 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12388, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
