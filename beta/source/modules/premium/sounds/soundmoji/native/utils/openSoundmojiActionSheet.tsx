// Module ID: 13689
// Function ID: 13690
// Name: openSoundmojiActionSheet
// Dependencies: [13690, 5406, 13691, 2118, 2]
// Exports: default

// Module 13689 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13690 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13691, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
