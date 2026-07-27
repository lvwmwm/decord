// Module ID: 15827
// Function ID: 122136
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4099, 15828, 1935, 2]
// Exports: default

// Module 15827 (openSoundboardSoundPreviewActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4099);
  obj = { channelId, sound };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15828, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
