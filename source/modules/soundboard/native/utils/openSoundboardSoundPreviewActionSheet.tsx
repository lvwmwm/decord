// Module ID: 15757
// Function ID: 121598
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4098, 15758, 1934, 2]
// Exports: default

// Module 15757 (openSoundboardSoundPreviewActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4098);
  obj = { channelId, sound };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15758, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
