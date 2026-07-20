// Module ID: 13199
// Function ID: 100067
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13199 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUpdateVADPermission() {
  const channelId = channelId.getChannelId();
  let flag = true;
  if (null != channelId) {
    const channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const voiceState = voiceState.getVoiceState(guildId, id.getId());
    let canResult = mode.getMode() !== constants.VOICE_ACTIVITY || null == channel || channel.isPrivate() || channel.isGuildStageVoice();
    if (!canResult) {
      canResult = closure_10.can(constants2.USE_VAD, channel);
    }
    if (!canResult) {
      canResult = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
      const tmp12 = null == voiceState || voiceState.suppress || null != voiceState.requestToSpeakTimestamp;
    }
    flag = canResult;
  }
  let flag2 = closure_15 !== flag;
  if (flag2) {
    let closure_16 = flag;
    closure_15 = flag;
    const obj = { type: "SET_VAD_PERMISSION", hasPermission: closure_15 };
    importDefault(dependencyMap[12]).dispatch(obj);
    flag2 = true;
    const obj2 = importDefault(dependencyMap[12]);
  }
  return flag2;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
({ InputModes: closure_13, Permissions: closure_14 } = arg1(dependencyMap[11]));
let closure_15 = true;
let closure_16 = true;
let tmp3 = (Store) => {
  class PermissionVADStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PermissionVADStore);
      obj = closure_5(PermissionVADStore);
      tmp2 = closure_4;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = PermissionVADStore;
  callback2(PermissionVADStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8, closure_9, closure_10, closure_11, closure_12);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "shouldShowWarning",
    value() {
      return !closure_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "canUseVoiceActivity",
    value() {
      return closure_15;
    }
  };
  items[2] = obj;
  return callback(PermissionVADStore, items);
}(importDefault(dependencyMap[13]).Store);
tmp3.displayName = "PermissionVADStore";
tmp3 = new tmp3(importDefault(dependencyMap[12]), {
  RTC_CONNECTION_STATE: handleUpdateVADPermission,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: handleUpdateVADPermission,
  AUDIO_SET_MODE: handleUpdateVADPermission,
  CHANNEL_UPDATES: handleUpdateVADPermission,
  THREAD_UPDATE: handleUpdateVADPermission,
  GUILD_ROLE_UPDATE: handleUpdateVADPermission,
  GUILD_MEMBER_UPDATE: handleUpdateVADPermission,
  IMPERSONATE_UPDATE: handleUpdateVADPermission,
  IMPERSONATE_STOP: handleUpdateVADPermission,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.some((userId) => {
      let tmp = userId.userId === id.getId();
      if (tmp) {
        tmp = callback();
      }
      return tmp;
    });
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleUnclearWarning() {
    let closure_16 = closure_15;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    let closure_16 = true;
  }
});
const obj = {
  RTC_CONNECTION_STATE: handleUpdateVADPermission,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: handleUpdateVADPermission,
  AUDIO_SET_MODE: handleUpdateVADPermission,
  CHANNEL_UPDATES: handleUpdateVADPermission,
  THREAD_UPDATE: handleUpdateVADPermission,
  GUILD_ROLE_UPDATE: handleUpdateVADPermission,
  GUILD_MEMBER_UPDATE: handleUpdateVADPermission,
  IMPERSONATE_UPDATE: handleUpdateVADPermission,
  IMPERSONATE_STOP: handleUpdateVADPermission,
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.some((userId) => {
      let tmp = userId.userId === id.getId();
      if (tmp) {
        tmp = callback();
      }
      return tmp;
    });
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleUnclearWarning() {
    let closure_16 = closure_15;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    let closure_16 = true;
  }
};
const tmp2 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("stores/PermissionVADStore.tsx");

export default tmp3;
