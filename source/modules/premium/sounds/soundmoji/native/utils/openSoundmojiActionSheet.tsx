// Module ID: 11390
// Function ID: 11391
// Name: openSoundmojiActionSheet
// Dependencies: [4794, 4310, 11391, 2007, 2]
// Exports: default

// Module 11390 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(11391, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4310);
  }
};
