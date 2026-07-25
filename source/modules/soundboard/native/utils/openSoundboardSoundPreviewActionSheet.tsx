// Module ID: 15815
// Function ID: 122089
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4099, 15816, 1935, 2]
// Exports: default

// Module 15815 (openSoundboardSoundPreviewActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4099);
  obj = { channelId, sound };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15816, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
