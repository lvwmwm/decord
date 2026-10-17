// Module ID: 12715
// Function ID: 12716
// Name: openSoundmojiActionSheet
// Dependencies: [12716, 5155, 12717, 2002, 2]
// Exports: default

// Module 12715 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12716 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12717, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
