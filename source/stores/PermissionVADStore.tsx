// Module ID: 13382
// Function ID: 102628
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1194, 1348, 4177, 3758, 4202, 4146, 653, 686, 566, 2]

// Module 13382 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_13;
let closure_14;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleUpdateVADPermission() {
  channelId = channelId.getChannelId();
  let flag = true;
  if (null != channelId) {
    channel = channel.getChannel(channelId);
    let guildId;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    voiceState = voiceState.getVoiceState(guildId, id.getId());
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
  let flag2 = flag !== flag;
  if (flag2) {
    const obj = { type: "SET_VAD_PERMISSION", hasPermission: flag };
    importDefault(686).dispatch(obj);
    flag2 = true;
    const obj2 = importDefault(686);
  }
  return flag2;
}
({ InputModes: closure_13, Permissions: closure_14 } = ME);
let c15 = true;
let c16 = true;
let tmp3 = ((Store) => {
  class PermissionVADStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PermissionVADStore);
      obj = outer1_5(PermissionVADStore);
      tmp2 = outer1_4;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PermissionVADStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8, outer1_9, outer1_10, outer1_11, outer1_12);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "shouldShowWarning",
    value() {
      return !outer1_16;
    }
  };
  items[1] = obj;
  obj = {
    key: "canUseVoiceActivity",
    value() {
      return outer1_15;
    }
  };
  items[2] = obj;
  return callback(PermissionVADStore, items);
})(require("initialize").Store);
tmp3.displayName = "PermissionVADStore";
tmp3 = new tmp3(require("dispatcher"), {
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
      let tmp = userId.userId === outer1_7.getId();
      if (tmp) {
        tmp = outer1_18();
      }
      return tmp;
    });
  },
  AUDIO_TOGGLE_SELF_MUTE: function handleUnclearWarning() {
    let closure_16 = c15;
  },
  PERMISSION_CLEAR_VAD_WARNING: function handleClearWarning() {
    let c16 = true;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/PermissionVADStore.tsx");

export default tmp3;
