// Module ID: 11122
// Function ID: 11123
// Name: openSoundmojiActionSheet
// Dependencies: [4639, 4157, 11123, 1959, 2]
// Exports: default

// Module 11122 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(11123, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4157);
  }
};
