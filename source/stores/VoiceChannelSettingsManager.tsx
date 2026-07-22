// Module ID: 16074
// Function ID: 123462
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16074 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function updateVoiceSettings() {
  const voiceChannelId = store2.getVoiceChannelId();
  if (null != voiceChannelId) {
    const channel = store.getChannel(voiceChannelId);
    if (tmp5) {
      let obj = importDefault(dependencyMap[11]);
      obj = { type: "SET_CHANNEL_BITRATE", bitrate: channel.bitrate };
      obj.dispatch(obj);
    }
    const tmp5 = null != channel && tmp2 !== channel.bitrate;
  }
  const voiceChannelId1 = store2.getVoiceChannelId();
  if (null != voiceChannelId1) {
    const channel1 = store.getChannel(voiceChannelId1);
    if (null != channel1) {
      let AUTO = channel1.videoQualityMode;
      if (null == AUTO) {
        AUTO = VideoQualityMode.AUTO;
      }
      if (tmp10 !== AUTO) {
        obj = { type: "SET_CHANNEL_VIDEO_QUALITY_MODE", mode: AUTO };
        importDefault(dependencyMap[11]).dispatch(obj);
        const obj3 = importDefault(dependencyMap[11]);
      }
    }
  }
}
function handleChannelUpdates(channels) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_10;
      if (closure_10.getVoiceChannelId() === iter.value.id) {
        let tmp3 = closure_16;
        let tmp4 = closure_16();
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function handleVoiceStateUpdates(voiceStates) {
  voiceStates = voiceStates.voiceStates;
  const item = voiceStates.forEach((sessionId) => {
    if (sessionId.getSessionId() === sessionId.sessionId) {
      callback();
    }
  });
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
const VideoQualityMode = arg1(dependencyMap[10]).VideoQualityMode;
let tmp2 = (arg0) => {
  class VoiceChannelSettingsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, VoiceChannelSettingsManager);
      items1 = [...items];
      obj = closure_5(VoiceChannelSettingsManager);
      tmp2 = closure_4;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { CHANNEL_UPDATES: closure_17, VOICE_STATE_UPDATES: closure_18 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const importDefault = VoiceChannelSettingsManager;
  callback2(VoiceChannelSettingsManager, arg0);
  return callback(VoiceChannelSettingsManager);
}(importDefault(dependencyMap[12]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[13]).fileFinishedImporting("stores/VoiceChannelSettingsManager.tsx");

export default tmp2;
