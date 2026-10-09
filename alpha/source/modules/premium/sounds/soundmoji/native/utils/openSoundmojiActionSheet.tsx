// Module ID: 11552
// Function ID: 11553
// Name: openSoundmojiActionSheet
// Dependencies: [11553, 5055, 11554, 2000, 2]
// Exports: default

// Module 11552 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 11553 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2000);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(11554, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
