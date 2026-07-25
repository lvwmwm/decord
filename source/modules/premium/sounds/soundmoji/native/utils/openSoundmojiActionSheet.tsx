// Module ID: 11063
// Function ID: 85984
// Name: openSoundmojiActionSheet
// Dependencies: [4583, 4099, 11064, 1935, 2]
// Exports: default

// Module 11063 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(11064, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4099);
  }
};
