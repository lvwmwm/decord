// Module ID: 13690
// Function ID: 13691
// Name: openSoundmojiActionSheet
// Dependencies: [13691, 5406, 13692, 2118, 2]
// Exports: default

// Module 13690 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13691 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13692, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
