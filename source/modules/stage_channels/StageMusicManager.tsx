// Module ID: 10642
// Function ID: 83028
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 4178, 1907, 4147, 4952, 1353, 10640, 10210, 566, 4964, 4958, 5078, 2]
// Exports: shouldShowStageMusicMuteButton, useShowStageMusicMuteButton

// Module 10642 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import sortKey from "sortKey";
import set from "set";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import createSound from "createSound";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function convertVolume(outputVolume) {
  return outputVolume / 400;
}
function checkVoiceStates() {
  const voiceChannelId = store.getVoiceChannelId();
  if (null == voiceChannelId) {
    closure_15.stop();
    let c14 = false;
  } else {
    channel = channel.getChannel(voiceChannelId);
    if (null != channel) {
      if (channel.isGuildStageVoice()) {
        if (importDefaultResult.isSelfDeaf()) {
          closure_15.stop();
          c14 = false;
        } else if (closure_13.shouldPlay()) {
          closure_15.volume = convertVolume(importDefaultResult.getOutputVolume());
          closure_15.loop();
          c14 = true;
        } else if (closure_12.isLive(voiceChannelId)) {
          closure_15.stop();
          c14 = false;
        } else if (closure_13.isMuted()) {
          closure_15.pause();
          c14 = false;
        } else {
          const _Object = Object;
          const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(voiceChannelId));
          const tmp8 = null != values.find((suppress) => !suppress.suppress && !suppress.isVoiceMuted());
          if (!tmp8) {
            if (!c14) {
              closure_15.volume = convertVolume(importDefaultResult.getOutputVolume());
              closure_15.loop();
              c14 = true;
            }
          }
          if (tmp8) {
            closure_15.pause();
            c14 = false;
          }
        }
      }
    }
    closure_15.stop();
    c14 = false;
  }
}
let c14 = false;
let closure_15 = createSound.createSound("stage_waiting", "stage_waiting", convertVolume(importDefaultResult.getOutputVolume()));
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default tmp2;
export const useShowStageMusicMuteButton = function useShowStageMusicMuteButton(channelId) {
  const _require = channelId;
  const items = [closure_9];
  let stateFromStores = _require(566).useStateFromStores(items, () => outer1_9.getVoiceChannelId() === closure_0);
  const obj = _require(566);
  const stageParticipants = _require(4964).useStageParticipants(channelId, _require(4958).StageChannelParticipantNamedIndex.SPEAKER);
  const obj2 = _require(4964);
  const tmp2 = null != stageParticipants.find((voiceState) => {
    voiceState = voiceState.voiceState;
    return !voiceState.isVoiceMuted();
  });
  const items1 = [closure_12];
  if (stateFromStores) {
    stateFromStores = null == obj3.useStateFromStores(items1, () => outer1_12.getStageInstanceByChannel(closure_0));
  }
  if (stateFromStores) {
    stateFromStores = !tmp2;
  }
  return stateFromStores;
};
export const shouldShowStageMusicMuteButton = function shouldShowStageMusicMuteButton(arg0) {
  let tmp = store.getVoiceChannelId() === arg0;
  mutableParticipants = mutableParticipants.getMutableParticipants(arg0, require(4958) /* sortKey */.StageChannelParticipantNamedIndex.SPEAKER);
  if (tmp) {
    tmp = null == closure_12.getStageInstanceByChannel(arg0);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
};
