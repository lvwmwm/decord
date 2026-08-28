// Module ID: 11443
// Function ID: 11444
// Name: openSoundmojiActionSheet
// Dependencies: [4935, 4413, 11444, 2010, 2]
// Exports: default

// Module 11443 (openSoundmojiActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11444, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  }
};
