// Module ID: 16066
// Function ID: 16067
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4270, 16067, 1988, 2]
// Exports: default

// Module 16066 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4270);
  obj = { channelId, sound };
  obj.openLazy(require(1988) /* asyncRequireImpl */(16067, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
