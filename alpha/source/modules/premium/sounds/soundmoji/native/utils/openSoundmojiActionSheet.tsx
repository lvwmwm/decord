// Module ID: 12398
// Function ID: 12399
// Name: openSoundmojiActionSheet
// Dependencies: [6960, 5131, 12399, 2119, 2]
// Exports: default

// Module 12398 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 6960 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12399, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
