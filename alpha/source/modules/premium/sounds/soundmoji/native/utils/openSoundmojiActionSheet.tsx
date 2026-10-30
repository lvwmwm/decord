// Module ID: 13376
// Function ID: 13377
// Name: openSoundmojiActionSheet
// Dependencies: [13377, 5253, 13378, 1995, 2]
// Exports: default

// Module 13376 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13377 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(1995);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13378, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
