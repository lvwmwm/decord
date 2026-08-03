// Module ID: 11253
// Function ID: 11254
// Name: openSoundmojiActionSheet
// Dependencies: [4705, 4223, 11254, 1959, 2]
// Exports: default

// Module 11253 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4223).openLazy(require(1959) /* asyncRequireImpl */(11254, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4223);
  }
};
