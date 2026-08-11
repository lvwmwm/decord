// Module ID: 11345
// Function ID: 11346
// Name: openSoundmojiActionSheet
// Dependencies: [4753, 4271, 11346, 2007, 2]
// Exports: default

// Module 11345 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(11346, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4271);
  }
};
