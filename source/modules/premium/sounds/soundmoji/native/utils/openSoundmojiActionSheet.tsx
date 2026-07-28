// Module ID: 11102
// Function ID: 86112
// Name: openSoundmojiActionSheet
// Dependencies: [4617, 4133, 11103, 1935, 2]
// Exports: default

// Module 11102 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4133).openLazy(require(1935) /* maybeLoadBundle */(11103, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4133);
  }
};
