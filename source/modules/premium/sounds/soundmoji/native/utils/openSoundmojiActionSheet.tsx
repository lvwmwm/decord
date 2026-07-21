// Module ID: 11066
// Function ID: 86099
// Name: openSoundmojiActionSheet
// Dependencies: []
// Exports: default

// Module 11066 (openSoundmojiActionSheet)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/premium/sounds/soundmoji/native/utils/openSoundmojiActionSheet.tsx");

export default function openSoundmojiActionSheet(arg0) {
  if (obj.getSoundmojiRenderingExperiment({ location: "openSoundmojiActionSheet" })) {
    importDefault(dependencyMap[1]).openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), "soundmoji_actionsheet_key", arg0);
    const obj2 = importDefault(dependencyMap[1]);
  }
};
