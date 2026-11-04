// Module ID: 13647
// Function ID: 13648
// Name: openSoundmojiActionSheet
// Dependencies: [13648, 5382, 13649, 2123, 2]
// Exports: default

// Module 13647 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13648 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13649, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
