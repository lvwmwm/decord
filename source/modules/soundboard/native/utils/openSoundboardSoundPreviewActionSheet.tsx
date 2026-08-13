// Module ID: 16226
// Function ID: 16227
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4310, 16227, 2007, 2]
// Exports: default

// Module 16226 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4310);
  obj = { channelId, sound };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16227, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
