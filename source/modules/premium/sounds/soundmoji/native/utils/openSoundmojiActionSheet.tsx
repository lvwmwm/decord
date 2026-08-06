// Module ID: 11258
// Function ID: 11259
// Name: openSoundmojiActionSheet
// Dependencies: [4734, 4253, 11259, 1988, 2]
// Exports: default

// Module 11258 (openSoundmojiActionSheet)
const result = require("SoundmojiActionSheet").fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(4253).openLazy(require(1988) /* asyncRequireImpl */(11259, dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(4253);
  }
};
