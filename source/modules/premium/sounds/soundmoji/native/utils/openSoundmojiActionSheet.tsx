// Module ID: 11252
// Function ID: 11253
// Name: openSoundmojiActionSheet
// Dependencies: [4734, 4253, 11253, 1959, 2]
// Exports: default

// Module 11252 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(11253, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4253);
  }
};
