// Module ID: 11104
// Function ID: 86351
// Name: openSoundmojiActionSheet
// Dependencies: [4582, 4098, 11105, 1934, 2]
// Exports: default

// Module 11104 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11105, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4098);
  }
};
