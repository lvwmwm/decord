// Module ID: 12562
// Function ID: 12563
// Name: openSoundmojiActionSheet
// Dependencies: [7055, 5226, 12563, 2119, 2]
// Exports: default

// Module 12562 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 7055 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12563, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
