// Module ID: 15901
// Function ID: 15902
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4157, 15902, 1959, 2]
// Exports: default

// Module 15901 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4157);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(15902, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
