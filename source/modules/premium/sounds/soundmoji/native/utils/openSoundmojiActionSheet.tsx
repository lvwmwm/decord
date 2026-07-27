// Module ID: 11064
// Function ID: 85989
// Name: openSoundmojiActionSheet
// Dependencies: [4583, 4099, 11065, 1935, 2]
// Exports: default

// Module 11064 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(11065, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4099);
  }
};
