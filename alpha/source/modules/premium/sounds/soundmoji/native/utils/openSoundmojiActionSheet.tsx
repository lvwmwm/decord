// Module ID: 14243
// Function ID: 14244
// Name: openSoundmojiActionSheet
// Dependencies: [14244, 5552, 14245, 2121, 2]
// Exports: default

// Module 14243 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 14244 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(14245, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
