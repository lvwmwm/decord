// Module ID: 16040
// Function ID: 16041
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4253, 16041, 1988, 2]
// Exports: default

// Module 16040 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4253);
  obj = { channelId, sound };
  obj.openLazy(require(1988) /* asyncRequireImpl */(16041, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
