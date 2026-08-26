// Module ID: 16503
// Function ID: 16504
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4411, 16504, 2009, 2]
// Exports: default

// Module 16503 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channelId, sound) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channelId, sound };
  obj.openLazy(asyncRequireImpl(16504, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
