// Module ID: 16244
// Function ID: 16245
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4310, 16245, 2007, 2]
// Exports: default

// Module 16244 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4310);
  obj = { channelId, sound };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16245, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
