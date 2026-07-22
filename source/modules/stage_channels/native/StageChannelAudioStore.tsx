// Module ID: 15685
// Function ID: 119821
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15685 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function disconnectFromCurrentStageChannel() {
  let closure_12 = null;
}
function handleAudioRouteChanged() {
  if (closure_13) {
    const currentRouteType = currentRouteType.getCurrentRouteType();
    let tmp5 = currentRouteType === arg1(dependencyMap[10]).RouteTypes.SPEAKER;
    if (!tmp5) {
      tmp5 = currentRouteType === arg1(dependencyMap[10]).RouteTypes.BLUETOOTH;
    }
    let flag2 = currentRouteType !== arg1(dependencyMap[10]).RouteTypes.UNKNOWN;
    if (flag2) {
      if (tmp5) {
        closure_13 = false;
        flag2 = true;
      } else {
        const AudioRoutePicker = NativeModules.AudioRoutePicker;
        if (null != AudioRoutePicker) {
          AudioRoutePicker.toggleSpeaker(true);
        }
        closure_13 = false;
        flag2 = true;
      }
    }
    return flag2;
  } else {
    return false;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = null;
let closure_13 = false;
let tmp2 = (Store) => {
  class StageChannelAudioStore {
    constructor() {
      self = this;
      tmp = closure_3(this, StageChannelAudioStore);
      obj = closure_6(StageChannelAudioStore);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = StageChannelAudioStore;
  callback2(StageChannelAudioStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11);
      const items = [closure_9];
      this.syncWith(items, closure_16);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getConnectedChannelId",
    value() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "getQueueAudioSwap",
    value() {
      return closure_13;
    }
  };
  items[2] = obj;
  return callback(StageChannelAudioStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp2.displayName = "StageChannelAudioStore";
tmp2 = new tmp2(importDefault(dependencyMap[12]), {
  RTC_CONNECTION_STATE: function handleConnectionStatusChanged() {
    const isConnectedResult = closure_11.isConnected();
    const channelId = closure_11.getChannelId();
    if (isConnectedResult) {
      if (null != channelId) {
        if (channelId !== id) {
          const channel = channel.getChannel(channelId);
          let tmp11 = null != channel;
          if (tmp11) {
            let isGuildStageVoiceResult = channel.isGuildStageVoice();
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForGuildCall = channel.isGuildVoice();
              if (defaultSpeakerForGuildCall) {
                let obj = { location: "StageChannelAudioStore" };
                defaultSpeakerForGuildCall = importDefault(dependencyMap[9]).getConfig(obj).defaultSpeakerForGuildCall;
                const obj2 = importDefault(dependencyMap[9]);
              }
              isGuildStageVoiceResult = defaultSpeakerForGuildCall;
            }
            if (!isGuildStageVoiceResult) {
              let defaultSpeakerForDMCall = channel.isDM();
              if (defaultSpeakerForDMCall) {
                obj = { location: "StageChannelAudioStore" };
                defaultSpeakerForDMCall = importDefault(dependencyMap[9]).getConfig(obj).defaultSpeakerForDMCall;
                const obj4 = importDefault(dependencyMap[9]);
              }
              isGuildStageVoiceResult = defaultSpeakerForDMCall;
            }
            tmp11 = isGuildStageVoiceResult;
          }
          if (!tmp11) {
            disconnectFromCurrentStageChannel();
          } else if (null != channel) {
            if (id !== channel.id) {
              let closure_13 = true;
            }
            const id = channel.id;
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
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/stage_channels/native/StageChannelAudioStore.tsx");

export default tmp2;
