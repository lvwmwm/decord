// Module ID: 15895
// Function ID: 15896
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4157, 15896, 1959, 2]
// Exports: default

// Module 15895 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4157);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15896, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
