// Module ID: 11119
// Function ID: 11120
// Name: openSoundmojiActionSheet
// Dependencies: [6821, 4342, 11120, 2007, 2]
// Exports: default

// Module 11119 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(11120, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4342);
  }
};
