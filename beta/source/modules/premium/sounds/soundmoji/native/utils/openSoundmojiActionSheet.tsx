// Module ID: 12976
// Function ID: 12977
// Name: openSoundmojiActionSheet
// Dependencies: [12977, 5242, 12978, 2002, 2]
// Exports: default

// Module 12976 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5242 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12977 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12978, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
