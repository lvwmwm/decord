// Module ID: 13109
// Function ID: 13110
// Name: openSoundmojiActionSheet
// Dependencies: [13110, 5546, 13111, 2121, 2]
// Exports: default

// Module 13109 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13110 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2121);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13111, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
