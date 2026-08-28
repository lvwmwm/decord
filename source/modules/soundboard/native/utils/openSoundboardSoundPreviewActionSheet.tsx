// Module ID: 16587
// Function ID: 16588
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4413, 16588, 2010, 2]
// Exports: default

// Module 16587 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequireImpl(16588, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
