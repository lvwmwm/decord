// Module ID: 16235
// Function ID: 16236
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4310, 16236, 2007, 2]
// Exports: default

// Module 16235 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4310);
  obj = { channelId, sound };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16236, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
