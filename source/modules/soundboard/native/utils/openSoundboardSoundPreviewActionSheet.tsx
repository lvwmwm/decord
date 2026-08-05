// Module ID: 16000
// Function ID: 16001
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4223, 16001, 1959, 2]
// Exports: default

// Module 16000 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4223);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(16001, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
