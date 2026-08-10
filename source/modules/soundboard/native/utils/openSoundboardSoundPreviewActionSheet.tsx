// Module ID: 16150
// Function ID: 16151
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4271, 16151, 1988, 2]
// Exports: default

// Module 16150 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4271);
  obj = { channelId, sound };
  obj.openLazy(require(1988) /* asyncRequireImpl */(16151, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
