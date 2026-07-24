// Module ID: 15804
// Function ID: 121920
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4098, 15805, 1934, 2]
// Exports: default

// Module 15804 (openSoundboardSoundPreviewActionSheet)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4098);
  obj = { channelId, sound };
  obj.openLazy(require(1934) /* maybeLoadBundle */(15805, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
