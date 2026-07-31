// Module ID: 15923
// Function ID: 15924
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4161, 15924, 1959, 2]
// Exports: default

// Module 15923 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4161);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15924, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
