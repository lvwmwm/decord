// Module ID: 17075
// Function ID: 17076
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4527, 17076, 1896, 2]
// Exports: default

// Module 17075 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequireImpl(17076, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
