// Module ID: 12710
// Function ID: 97587
// Name: makeContextUserKey
// Dependencies: []
// Exports: drainPendingAudioSettings, getPendingAudioSettings, updatePendingSettings

// Module 12710 (makeContextUserKey)
function makeContextUserKey(context, userId) {
  return "" + context + ":" + userId;
}
function unpackContextUserKey(str) {
  const tmp = callback(str.split(":"), 2);
  const items = [tmp[0], tmp[1]];
  return items;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = {};
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/user_settings/voice/AudioSettingsPending.tsx");

export const getPendingAudioSettings = function getPendingAudioSettings(STREAM, STREAM) {
  return closure_1[closure_2(undefined, STREAM, STREAM)];
};
export const updatePendingSettings = function updatePendingSettings(context, userId, arg2) {
  const tmp = makeContextUserKey(context, userId);
  const merged = Object.assign(closure_1[tmp]);
  const merged1 = Object.assign(arg2);
  closure_1[tmp] = {};
};
export const drainPendingAudioSettings = function drainPendingAudioSettings(arg0) {
  for (const key10007 in closure_1) {
    let tmp = key10007;
    let tmp2 = closure_3;
    let tmp3 = closure_0;
    let tmp4 = closure_0(closure_3(key10007), 2);
    let tmp5 = closure_1;
    let tmp6 = arg0(tmp4[0], tmp4[1], closure_1[key10007]);
  }
  let closure_1 = {};
};
