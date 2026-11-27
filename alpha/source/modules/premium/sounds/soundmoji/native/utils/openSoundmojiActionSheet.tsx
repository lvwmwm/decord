// Module ID: 12619
// Function ID: 12620
// Name: openSoundmojiActionSheet
// Dependencies: [7086, 5257, 12620, 2120, 2]
// Exports: default

// Module 12619 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 7086 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2120);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12620, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
