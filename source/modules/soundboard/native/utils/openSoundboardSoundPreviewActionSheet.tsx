// Module ID: 16020
// Function ID: 16021
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4253, 16021, 1959, 2]
// Exports: default

// Module 16020 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4253);
  obj = { channelId, sound };
  obj.openLazy(require(1959) /* asyncRequireImpl */(16021, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
