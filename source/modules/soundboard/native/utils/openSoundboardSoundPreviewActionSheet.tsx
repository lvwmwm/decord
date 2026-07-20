// Module ID: 15622
// Function ID: 119319
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: []
// Exports: default

// Module 15622 (openSoundboardSoundPreviewActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = importDefault(dependencyMap[0]);
  obj = { channelId, sound };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
