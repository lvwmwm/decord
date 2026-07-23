// Module ID: 15802
// Function ID: 121994
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 27, 8837, 1348, 4202, 15803, 8838, 566, 686, 2]

// Module 15802 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NativeModules } from "get ActivityIndicator";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function disconnectFromCurrentStageChannel() {
  let c12 = null;
}
function handleAudioRouteChanged() {
  if (c13) {
    currentRouteType = currentRouteType.getCurrentRouteType();
    let tmp5 = currentRouteType === require(8838) /* RouteTypes */.RouteTypes.SPEAKER;
    if (!tmp5) {
      tmp5 = currentRouteType === require(8838) /* RouteTypes */.RouteTypes.BLUETOOTH;
    }
    let flag2 = currentRouteType !== require(8838) /* RouteTypes */.RouteTypes.UNKNOWN;
    if (flag2) {
      if (tmp5) {
        c13 = false;
        flag2 = true;
      } else {
        const AudioRoutePicker = NativeModules.AudioRoutePicker;
        if (null != AudioRoutePicker) {
          AudioRoutePicker.toggleSpeaker(true);
        }
        c13 = false;
        flag2 = true;
      }
    }
    return flag2;
  } else {
    return false;
  }
}
let c12 = null;
let c13 = false;
let tmp2 = ((Store) => {
  class StageChannelAudioStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, StageChannelAudioStore);
      obj = outer1_6(StageChannelAudioStore);
      tmp2 = outer1_5;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(StageChannelAudioStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11);
      const items = [outer1_9];
      this.syncWith(items, outer1_16);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getConnectedChannelId",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getQueueAudioSwap",
    value() {
      return outer1_13;
    }
  };
  items[2] = obj;
  return callback(StageChannelAudioStore, items);
})(require("initialize").Store);
tmp2.displayName = "StageChannelAudioStore";
tmp2 = new tmp2(require("dispatcher"), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = closure_11.isConnected();
    const channelId = closure_11.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          channel = channel.getChannel(channelId);
          let tmp11 = null != channel;
          if (tmp11) {
            let isGuildStageVoiceResult = channel.isGuildStageVoice();
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForGuildCall = channel.isGuildVoice();
              if (defaultSpeakerForGuildCall) {
                let obj = { location: "StageChannelAudioStore" };
                defaultSpeakerForGuildCall = importDefault(15803).getConfig(obj).defaultSpeakerForGuildCall;
                const obj2 = importDefault(15803);
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                obj = { location: "StageChannelAudioStore" };
                defaultSpeakerForDMCall = importDefault(15803).getConfig(obj).defaultSpeakerForDMCall;
                const obj4 = importDefault(15803);
              }
              isGuildStageVoiceResult = defaultSpeakerForDMCall;
            }
            tmp11 = isGuildStageVoiceResult;
          }
          if (!tmp11) {
            disconnectFromCurrentStageChannel();
          } else if (null != channel) {
            if (id !== channel.id) {
              let c13 = true;
            }
            id = channel.id;
          }
          return true;
        }
      }
    }
    let flag = !isConnectedResult;
    if (flag) {
      flag = null == channelId;
    }
    if (flag) {
      flag = null != id;
    }
    if (flag) {
      disconnectFromCurrentStageChannel();
      flag = true;
    }
    return flag;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default tmp2;
