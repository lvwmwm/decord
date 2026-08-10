// Module ID: 11340
// Function ID: 11341
// Name: openSoundmojiActionSheet
// Dependencies: [4753, 4271, 11341, 1988, 2]
// Exports: default

// Module 11340 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(11341, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4271);
  }
};
