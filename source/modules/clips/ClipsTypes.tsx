// Module ID: 4183
// Function ID: 35994
// Name: getClipCropAspectRatio
// Dependencies: [284214097]
// Exports: getClipCropBounds

// Module 4183 (getClipCropAspectRatio)
function getClipCropAspectRatio(arg0) {
  if (obj.PORTRAIT_9_16 === arg0) {
    return 0.5625;
  } else if (obj.LANDSCAPE_16_9 === arg0) {
    return 1.7777777777777777;
  } else {
    return null;
  }
}
const obj = { ORIGINAL: "original", PORTRAIT_9_16: "9:16", LANDSCAPE_16_9: "16:9" };
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/clips/ClipsTypes.tsx");

export const ClipSignalTypes = { MANUAL: "manual", DISTRIBUTED: "distributed", SHOUTING: "shouting", LAUGHTER: "laughter", GAME_EVENT: "game_event", SPEAKING: "speaking", SOUNDBOARD: "soundboard" };
export const ClipsHardwareClassification = { UNKNOWN: "unknown", BELOW_MINIMUM: "below_minimum", MEETS_MINIMUM: "meets_minimum", MEETS_AUTO_ENABLE: "meets_auto_enable" };
export const ClipsSaveNoOpReason = { MAX_CONCURRENT_SAVES: "max_concurrent_saves", NO_ELIGIBLE_SOURCE: "no_eligible_source", MODULE_NOT_LOADED: "module_not_loaded", BUFFER_WARMING_UP: "buffer_warming_up", BRIDGE_SHUTDOWN: "bridge_shutdown", RECORDING_NOT_READY: "recording_not_ready" };
export const Emotion = { ANGER: "anger", CALM: "calm", DISGUST: "disgust", FEAR: "fear", HAPPY: "happy", NEUTRAL: "neutral", SAD: "sad", SURPRISED: "surprised" };
export const ClipCropPreset = obj;
export { getClipCropAspectRatio };
export const getClipCropBounds = function getClipCropBounds(bounds) {
  bounds = undefined;
  if (null != bounds) {
    bounds = bounds.bounds;
  }
  if (null != bounds) {
    return bounds.bounds;
  } else {
    let preset;
    if (null != bounds) {
      preset = bounds.preset;
    }
    const tmp2Result = getClipCropAspectRatio(preset);
    let tmp5 = null;
    if (null != tmp2Result) {
      const obj = { aspectRatio: tmp2Result };
      tmp5 = obj;
    }
    return tmp5;
  }
};
export const ClipType = { CLIP: "clip", SCREENSHOT: "screenshot", VOICE_CLIP: "voice_clip" };
export const GameEventType = { UNCLASSIFIED: "unclassified", KILL: "kill", MULTIKILL: "multikill", DEATH: "death", ASSIST: "assist", ITEM: "item", VICTORY: "victory", DEFEAT: "defeat", LEVEL_UP: "level_up", TREASURE: "treasure", OBJECTIVE_KILL: "objective_kill" };
