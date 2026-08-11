// Module ID: 16167
// Function ID: 16168
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4271, 16168, 2007, 2]
// Exports: default

// Module 16167 (openSoundboardSoundPreviewActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(4271);
  obj = { channelId, sound };
  obj.openLazy(require(2007) /* asyncRequireImpl */(16168, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
