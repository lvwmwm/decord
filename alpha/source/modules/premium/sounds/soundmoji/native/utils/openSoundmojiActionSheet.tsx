// Module ID: 13657
// Function ID: 13658
// Name: openSoundmojiActionSheet
// Dependencies: [13658, 5374, 13659, 2118, 2]
// Exports: default

// Module 13657 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13658 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13659, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
