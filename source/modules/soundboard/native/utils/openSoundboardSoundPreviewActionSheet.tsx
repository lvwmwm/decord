// Module ID: 16891
// Function ID: 16892
// Name: openSoundboardSoundPreviewActionSheet
// Dependencies: [4445, 16892, 2008, 2]
// Exports: default

// Module 16891 (openSoundboardSoundPreviewActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/soundboard/native/utils/openSoundboardSoundPreviewActionSheet.tsx");

export default function openSoundboardSoundPreviewActionSheet(channel, sound, analyticsSource, soundGridLocation) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { channel, sound, soundGridLocation, analyticsSource };
  obj.openLazy(asyncRequireImpl(16892, dependencyMap.paths), "SoundboardSoundPreviewActionSheet", obj);
};
