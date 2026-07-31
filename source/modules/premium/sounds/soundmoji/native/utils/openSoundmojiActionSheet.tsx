// Module ID: 11140
// Function ID: 11141
// Name: openSoundmojiActionSheet
// Dependencies: [4643, 4161, 11141, 1959, 2]
// Exports: default

// Module 11140 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(11141, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4161);
  }
};
