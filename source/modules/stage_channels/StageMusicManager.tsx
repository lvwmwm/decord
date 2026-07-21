// Module ID: 10637
// Function ID: 83081
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: shouldShowStageMusicMuteButton, useShowStageMusicMuteButton

// Module 10637 (_isNativeReflectConstruct)
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
    let closure_14 = false;
  } else {
    const channel = channel.getChannel(voiceChannelId);
    if (null != channel) {
      if (channel.isGuildStageVoice()) {
        if (importDefaultResult.isSelfDeaf()) {
          closure_15.stop();
          closure_14 = false;
        } else if (closure_13.shouldPlay()) {
          closure_15.volume = convertVolume(importDefaultResult.getOutputVolume());
          closure_15.loop();
          closure_14 = true;
        } else if (closure_12.isLive(voiceChannelId)) {
          closure_15.stop();
          closure_14 = false;
        } else if (closure_13.isMuted()) {
          closure_15.pause();
          closure_14 = false;
        } else {
          const _Object = Object;
          const values = Object.values(voiceStatesForChannel.getVoiceStatesForChannel(voiceChannelId));
          const tmp8 = null != values.find((suppress) => !suppress.suppress && !suppress.isVoiceMuted());
          if (!tmp8) {
            if (!closure_14) {
              closure_15.volume = convertVolume(importDefaultResult.getOutputVolume());
              closure_15.loop();
              closure_14 = true;
            }
          }
          if (tmp8) {
            closure_15.pause();
            closure_14 = false;
          }
        }
      }
    }
    closure_15.stop();
    closure_14 = false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = false;
let closure_15 = arg1(dependencyMap[12]).createSound("stage_waiting", "stage_waiting", convertVolume(importDefaultResult.getOutputVolume()));
let tmp2 = (arg0) => {
  class StageMusicManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, StageMusicManager);
      items1 = [...items];
      obj = closure_5(StageMusicManager);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { VOICE_CHANNEL_SELECT: tmp2Result.handleVoiceChannelSelect, LOGOUT: tmp2Result.handleLogout, STAGE_MUSIC_MUTE: tmp2Result.handleMute, STAGE_MUSIC_PLAY: tmp2Result.handlePlay, VOICE_STATE_UPDATES: tmp2Result.handleVoiceStateUpdates, AUDIO_SET_OUTPUT_VOLUME: tmp2Result.handleSetOutputVolume, AUDIO_TOGGLE_SELF_DEAF: tmp2Result.handleToggleSelfDeaf };
      return tmp2Result;
    }
  }
  const arg1 = StageMusicManager;
  callback2(StageMusicManager, arg0);
  let obj = {
    key: "handleVoiceChannelSelect",
    value(channelId) {
      channelId = channelId.channelId;
      if (null != channelId) {
        const channel = channel.getChannel(channelId);
        if (null != channel) {
          if (channel.isGuildStageVoice()) {
            callback5();
          }
        }
        closure_15.stop();
        let closure_14 = false;
      } else {
        closure_15.stop();
        closure_14 = false;
      }
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "handleLogout",
    value() {
      closure_15.stop();
      let closure_14 = false;
    }
  };
  items[1] = obj;
  obj = {
    key: "handlePlay",
    value(play) {
      if (play.play) {
        callback5();
      } else {
        closure_15.pause();
        let closure_14 = false;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleMute",
    value(muted) {
      if (muted.muted) {
        closure_15.pause();
        let closure_14 = false;
      } else {
        callback5();
      }
    }
  };
  items[4] = {
    key: "handleVoiceStateUpdates",
    value() {
      callback5();
    }
  };
  items[5] = {
    key: "handleSetOutputVolume",
    value(volume) {
      closure_15.volume = callback4(volume.volume);
    }
  };
  items[6] = {
    key: "handleToggleSelfDeaf",
    value() {
      callback5();
    }
  };
  return callback(StageMusicManager, items);
}(importDefault(dependencyMap[16]));
tmp2 = new tmp2();
const obj2 = arg1(dependencyMap[12]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/stage_channels/StageMusicManager.tsx");

export default tmp2;
export const useShowStageMusicMuteButton = function useShowStageMusicMuteButton(channelId) {
  const arg1 = channelId;
  const items = [closure_9];
  let stateFromStores = arg1(dependencyMap[13]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId() === arg0);
  const obj = arg1(dependencyMap[13]);
  const stageParticipants = arg1(dependencyMap[14]).useStageParticipants(channelId, arg1(dependencyMap[15]).StageChannelParticipantNamedIndex.SPEAKER);
  const obj2 = arg1(dependencyMap[14]);
  const tmp2 = null != stageParticipants.find((voiceState) => {
    voiceState = voiceState.voiceState;
    return !voiceState.isVoiceMuted();
  });
  const items1 = [closure_12];
  if (stateFromStores) {
    stateFromStores = null == obj3.useStateFromStores(items1, () => stageInstanceByChannel.getStageInstanceByChannel(arg0));
  }
  if (stateFromStores) {
    stateFromStores = !tmp2;
  }
  return stateFromStores;
};
export const shouldShowStageMusicMuteButton = function shouldShowStageMusicMuteButton(arg0) {
  let tmp = store.getVoiceChannelId() === arg0;
  const mutableParticipants = mutableParticipants.getMutableParticipants(arg0, arg1(dependencyMap[15]).StageChannelParticipantNamedIndex.SPEAKER);
  if (tmp) {
    tmp = null == closure_12.getStageInstanceByChannel(arg0);
  }
  if (tmp) {
    tmp = !tmp2;
  }
  return tmp;
};
