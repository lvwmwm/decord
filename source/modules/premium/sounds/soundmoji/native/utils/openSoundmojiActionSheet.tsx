// Module ID: 11399
// Function ID: 11400
// Name: openSoundmojiActionSheet
// Dependencies: [4793, 4312, 11400, 2007, 2]
// Exports: default

// Module 11399 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4312).openLazy(require(2007) /* asyncRequireImpl */(11400, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4312);
  }
};
