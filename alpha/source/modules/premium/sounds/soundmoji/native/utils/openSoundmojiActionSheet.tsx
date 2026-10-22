// Module ID: 12865
// Function ID: 12866
// Name: openSoundmojiActionSheet
// Dependencies: [12866, 5196, 12867, 2002, 2]
// Exports: default

// Module 12865 (openSoundmojiActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5196 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 12866 */;
import size from "module_2" /* 2 */;

let tmp;
const asyncRequire = tmp(2002);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  const obj = SoundmojiRenderingExperiment;
  const tmp2 = dependencyMap;
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(12867, tmp2.paths), "soundmoji_actionsheet_key", arg0);
  }
};
