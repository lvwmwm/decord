// Module ID: 12727
// Function ID: 12728
// Name: openSoundmojiActionSheet
// Dependencies: [12728, 5155, 12729, 2002, 2]
// Exports: default

// Module 12727 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12728 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12729, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
