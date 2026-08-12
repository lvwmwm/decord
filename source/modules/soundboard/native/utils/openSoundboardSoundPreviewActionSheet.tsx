// Module ID: 16224
// Function ID: 16225
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4312, 16225, 2007, 2]
// Exports: default

// Module 16224 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4312);
  obj = { channelId, sound };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16225, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
