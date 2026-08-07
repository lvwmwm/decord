// Module ID: 11273
// Function ID: 11274
// Name: openSoundmojiActionSheet
// Dependencies: [4751, 4270, 11274, 1988, 2]
// Exports: default

// Module 11273 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(11274, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4270);
  }
};
