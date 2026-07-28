// Module ID: 15866
// Function ID: 122292
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4133, 15867, 1935, 2]
// Exports: default

// Module 15866 (openSoundboardSoundPreviewActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4133);
  obj = { channelId, sound };
  obj.openLazy(require(1935) /* maybeLoadBundle */(15867, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
