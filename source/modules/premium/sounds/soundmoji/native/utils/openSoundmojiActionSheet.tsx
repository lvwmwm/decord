// Module ID: 11224
// Function ID: 11225
// Name: openSoundmojiActionSheet
// Dependencies: [4704, 4223, 11225, 1959, 2]
// Exports: default

// Module 11224 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(11225, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4223);
  }
};
