// Module ID: 13671
// Function ID: 13672
// Name: openSoundmojiActionSheet
// Dependencies: [13672, 5376, 13673, 2118, 2]
// Exports: default

// Module 13671 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5376 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 13672 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2118);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(13673, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
