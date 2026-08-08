// Module ID: 16141
// Function ID: 16142
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4271, 16142, 1988, 2]
// Exports: default

// Module 16141 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4271);
  obj = { channelId, sound };
  obj.openLazy(require(1988) /* asyncRequireImpl */(16142, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
