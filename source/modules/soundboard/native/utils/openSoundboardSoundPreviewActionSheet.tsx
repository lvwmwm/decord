// Module ID: 16294
// Function ID: 16295
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4342, 16295, 2007, 2]
// Exports: default

// Module 16294 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4342);
  obj = { channelId, sound };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16295, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
