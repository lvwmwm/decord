// Module ID: 13658
// Function ID: 13659
// Name: openSoundmojiActionSheet
// Dependencies: [13659, 5384, 13660, 2123, 2]
// Exports: default

// Module 13658 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5384 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13659 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2123);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13660, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
