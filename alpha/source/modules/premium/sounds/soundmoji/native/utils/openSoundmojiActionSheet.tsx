// Module ID: 12611
// Function ID: 12612
// Name: openSoundmojiActionSheet
// Dependencies: [7086, 5257, 12612, 2120, 2]
// Exports: default

// Module 12611 (openSoundmojiActionSheet)
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
    obj2.openLazy(asyncRequire(12612, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
