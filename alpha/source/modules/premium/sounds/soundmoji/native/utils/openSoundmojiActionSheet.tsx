// Module ID: 12360
// Function ID: 12361
// Name: openSoundmojiActionSheet
// Dependencies: [12361, 5008, 12362, 2119, 2]
// Exports: default

// Module 12360 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12361 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2119);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12362, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
