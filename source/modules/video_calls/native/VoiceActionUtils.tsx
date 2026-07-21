// Module ID: 10722
// Function ID: 83416
// Name: NOOP
// Dependencies: []
// Exports: createDeafHandler, createMuteHandler

// Module 10722 (NOOP)
function NOOP() {

}
const obj = { SERVER_MUTE: 0, [0]: "SERVER_MUTE", SUPPRESS: 1, [1]: "SUPPRESS", SELF_MUTE: 2, [2]: "SELF_MUTE", NONE: 3, [3]: "NONE" };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/video_calls/native/VoiceActionUtils.tsx");

export const DominantMuteState = obj;
export const createMuteHandler = function createMuteHandler(muteStates, stateFromStores) {
  let flag = stateFromStores;
  if (stateFromStores === undefined) {
    flag = false;
  }
  let SERVER_MUTE = obj.NONE;
  if (muteStates.selfMute) {
    SERVER_MUTE = obj.SELF_MUTE;
  }
  if (flag) {
    let showServerMuteAlert = NOOP;
  } else {
    showServerMuteAlert = require(dependencyMap[0]).handleToggleSelfMute;
  }
  if (muteStates.suppress) {
    showServerMuteAlert = require(dependencyMap[0]).showSuppressedAlert;
    SERVER_MUTE = obj.SUPPRESS;
  }
  if (muteStates.mute) {
    showServerMuteAlert = require(dependencyMap[0]).showServerMuteAlert;
    SERVER_MUTE = obj.SERVER_MUTE;
  }
  const obj = { mute: tmp10, onPress: showServerMuteAlert, dominantMuteState: SERVER_MUTE };
  return obj;
};
export const createDeafHandler = function createDeafHandler(deafStates) {
  let showServerDeafenAlert = require(dependencyMap[0]).handleToggleSelfDeaf;
  if (deafStates.deaf) {
    showServerDeafenAlert = require(dependencyMap[0]).showServerDeafenAlert;
  }
  const obj = { deaf: tmp3, onPress: showServerDeafenAlert };
  return obj;
};
