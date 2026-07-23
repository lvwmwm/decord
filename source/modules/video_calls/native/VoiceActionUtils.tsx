// Module ID: 10733
// Function ID: 83478
// Name: NOOP
// Dependencies: [8836, 2]
// Exports: createDeafHandler, createMuteHandler

// Module 10733 (NOOP)
function NOOP() {

}
let obj = { SERVER_MUTE: 0, [0]: "SERVER_MUTE", SUPPRESS: 1, [1]: "SUPPRESS", SELF_MUTE: 2, [2]: "SELF_MUTE", NONE: 3, [3]: "NONE" };
const result = require("set").fileFinishedImporting("modules/video_calls/native/VoiceActionUtils.tsx");

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
    showServerMuteAlert = require(8836) /* _handleToggleVideo */.handleToggleSelfMute;
  }
  if (muteStates.suppress) {
    showServerMuteAlert = require(8836) /* _handleToggleVideo */.showSuppressedAlert;
    SERVER_MUTE = obj.SUPPRESS;
  }
  if (muteStates.mute) {
    showServerMuteAlert = require(8836) /* _handleToggleVideo */.showServerMuteAlert;
    SERVER_MUTE = obj.SERVER_MUTE;
  }
  obj = { mute: tmp10, onPress: showServerMuteAlert, dominantMuteState: SERVER_MUTE };
  return obj;
};
export const createDeafHandler = function createDeafHandler(deafStates) {
  let showServerDeafenAlert = require(8836) /* _handleToggleVideo */.handleToggleSelfDeaf;
  if (deafStates.deaf) {
    showServerDeafenAlert = require(8836) /* _handleToggleVideo */.showServerDeafenAlert;
  }
  const obj = { deaf: tmp3, onPress: showServerDeafenAlert };
  return obj;
};
