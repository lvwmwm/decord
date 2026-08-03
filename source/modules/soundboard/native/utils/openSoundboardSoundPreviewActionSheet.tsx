// Module ID: 15987
// Function ID: 15988
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4223, 15988, 1959, 2]
// Exports: default

// Module 15987 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4223);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15988, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
