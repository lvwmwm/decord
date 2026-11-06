// Module ID: 13633
// Function ID: 13634
// Name: openSoundmojiActionSheet
// Dependencies: [13634, 5404, 13635, 2118, 2]
// Exports: default

// Module 13633 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5404 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13634 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13635, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
