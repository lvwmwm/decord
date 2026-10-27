// Module ID: 12958
// Function ID: 12959
// Name: openSoundmojiActionSheet
// Dependencies: [12959, 5211, 12960, 1999, 2]
// Exports: default

// Module 12958 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12959 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1999);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12960, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
