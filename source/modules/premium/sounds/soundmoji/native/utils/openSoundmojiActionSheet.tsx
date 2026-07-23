// Module ID: 11077
// Function ID: 86162
// Name: openSoundmojiActionSheet
// Dependencies: [4582, 4098, 11078, 1934, 2]
// Exports: default

// Module 11077 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(11078, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4098);
  }
};
