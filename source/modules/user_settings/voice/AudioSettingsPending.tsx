// Module ID: 12882
// Function ID: 100097
// Name: makeContextUserKey
// Dependencies: [57, 2]
// Exports: drainPendingAudioSettings, getPendingAudioSettings, updatePendingSettings

// Module 12882 (makeContextUserKey)
import _slicedToArray from "_slicedToArray";

function makeContextUserKey(context, userId) {
  return "" + context + ":" + userId;
}
function unpackContextUserKey(key10007) {
  const tmp = callback(key10007.split(":"), 2);
  const items = [tmp[0], tmp[1]];
  return items;
}
let closure_1 = {};
const result = require("set").fileFinishedImporting("modules/user_settings/voice/AudioSettingsPending.tsx");

export const getPendingAudioSettings = function getPendingAudioSettings(_slicedToArray, userId) {
  return dependencyMap[makeContextUserKey(undefined, _slicedToArray, userId)];
};
export const updatePendingSettings = function updatePendingSettings(context, userId, arg2) {
  const tmp = makeContextUserKey(context, userId);
  const merged = Object.assign(dependencyMap[tmp]);
  const merged1 = Object.assign(arg2);
  dependencyMap[tmp] = {};
};
export const drainPendingAudioSettings = function drainPendingAudioSettings(arg0) {
  for (const key10007 in closure_1) {
    let tmp = key10007;
    let tmp2 = unpackContextUserKey;
    let tmp3 = callback;
    let tmp4 = callback(unpackContextUserKey(key10007), 2);
    let tmp5 = dependencyMap;
    let tmp6 = arg0(tmp4[0], tmp4[1], dependencyMap[key10007]);
    continue;
  }
  const dependencyMap = {};
};
