// Module ID: 11126
// Function ID: 11127
// Name: openSoundmojiActionSheet
// Dependencies: [4639, 4157, 11127, 1959, 2]
// Exports: default

// Module 11126 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11127, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4157);
  }
};
