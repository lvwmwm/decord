// Module ID: 15865
// Function ID: 121421
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15865 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function updateAudioSettingsProto(arg0, arg1, arg2, arg3) {
  let obj = arg1(dependencyMap[16]);
  const result = obj.coerceAudioContextForProto(arg2);
  if (null == result) {
    return false;
  } else {
    obj = tmp13[arg1];
    if (null == obj) {
      const AudioContextSetting = arg1(dependencyMap[13]).AudioContextSetting;
      obj = { muted: false, volume: DEFAULT_VOLUME_FOR_CONTEXT(arg2) };
      obj = AudioContextSetting.create(obj);
    }
    arg0[result][arg1] = obj;
    arg3(arg0[result][arg1]);
    const _String = String;
    const _Date = Date;
    arg0[result][arg1].modifiedAt = String(Date.now());
    if (flag) {
      if (!tmp10) {
        delete r1[r0];
      }
      const tmp10 = tmp13[arg1].volume !== DEFAULT_VOLUME_FOR_CONTEXT(arg2) || tmp13[arg1].muted || tmp13[arg1].soundboardMuted;
    }
    function trimOldestEntries(arg0) {
      let diff;
      const entries = callback(closure_2[12]).entries(arg0);
      if (entries.length > 300) {
        let num3 = 0;
        if (0 < length - 300) {
          do {
            let tmp2 = closure_8;
            let first = closure_8(tmp[num3], 1)[0];
            delete r9[r1];
            num3 = num3 + 1;
            diff = length - 300;
          } while (num3 < diff);
        }
      }
    }(arg0[result]);
    return true;
  }
}
function handleConnectionOpen() {
  function handleMigrateSettings() {
    const Storage = callback(closure_2[14]).Storage;
    if (!Storage.get(callback2(id.getId()))) {
      const PreloadedUserSettingsActionCreators = callback(closure_2[15]).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
        let tmp40;
        let tmp41;
        let tmp5;
        let tmp6;
        const entries = Object.entries(state.getState().settingsByContext);
        let flag = false;
        let num = 0;
        let flag2 = false;
        if (0 < entries.length) {
          do {
            let tmp3 = closure_8;
            let tmp4 = closure_8(entries[num], 2);
            [tmp5, tmp6] = tmp4;
            let tmp7 = closure_0;
            let tmp8 = closure_2;
            let obj = closure_0(closure_2[16]);
            let result = obj.coerceAudioContextForProto(tmp5);
            let tmp10 = flag;
            let tmp11 = tmp;
            let tmp12 = tmp2;
            if (null != result) {
              let tmp63 = arg0[result];
              let _String = String;
              let _Date = Date;
              let StringResult = String(Date.now());
              obj = {};
              let _Object4 = Object;
              let entries1 = Object.entries(tmp6.localMutes);
              let num2 = 0;
              let num3 = 0;
              if (0 < entries1.length) {
                do {
                  let tmp13 = closure_8;
                  let tmp14 = closure_8(entries1[num2], 2);
                  obj = { muted: tmp14[1] };
                  let tmp15 = closure_15;
                  obj.volume = closure_15(tmp5);
                  obj.modifiedAt = StringResult;
                  obj.soundboardMuted = false;
                  obj[tmp14[0]] = obj;
                  num2 = num2 + 1;
                  num3 = num2;
                  let length = entries1.length;
                } while (num2 < length);
              }
              let _Object = Object;
              let entries2 = Object.entries(tmp6.localVolumes);
              let num4 = 0;
              let num5 = 0;
              if (0 < entries2.length) {
                do {
                  let tmp16 = closure_8;
                  let tmp17 = closure_8(entries2[num4], 2);
                  let first = tmp17[0];
                  let obj1 = { muted: false, modifiedAt: StringResult };
                  let tmp19 = obj1;
                  let merged = Object.assign(obj[first]);
                  let tmp21 = closure_0;
                  let tmp22 = closure_2;
                  let obj4 = closure_0(closure_2[16]);
                  obj1["volume"] = obj4.snapVolumeToDefault(tmp17[1], tmp5);
                  obj[first] = obj1;
                  num4 = num4 + 1;
                  num5 = num4;
                  let length2 = entries2.length;
                } while (num4 < length2);
              }
              let _Object2 = Object;
              let length3 = Object.keys(tmp63).length;
              let tmp23 = closure_19;
              let _Object3 = Object;
              let entries3 = Object.entries(obj);
              let tmp24 = closure_19(entries3.entries());
              let iter = tmp24();
              let flag3 = flag;
              let iter2 = iter;
              tmp10 = flag;
              let tmp25 = tmp63;
              let tmp26 = StringResult;
              let tmp27 = obj;
              let tmp28 = num3;
              let tmp29 = entries1;
              let tmp30 = num5;
              let tmp31 = entries2;
              let tmp32 = iter;
              let tmp33 = length3;
              let tmp34 = tmp24;
              tmp11 = tmp;
              tmp12 = tmp2;
              if (!iter.done) {
                let tmp35 = closure_8;
                let tmp36 = closure_8(iter2.value, 2);
                let tmp38 = closure_8;
                let tmp39 = closure_8(tmp36[1], 2);
                [tmp40, tmp41] = tmp39;
                let tmp42 = iter2;
                tmp10 = flag3;
                let tmp43 = tmp63;
                let tmp44 = StringResult;
                let tmp45 = obj;
                let tmp46 = num3;
                let tmp47 = entries1;
                let tmp48 = num5;
                let tmp49 = entries2;
                let tmp50 = length3;
                let tmp51 = tmp24;
                tmp11 = tmp40;
                tmp12 = tmp41;
                while (300 - length3 - (tmp37 + 1) > 0) {
                  if (null == tmp63[tmp40]) {
                    tmp63[tmp40] = tmp41;
                    flag3 = true;
                  }
                  let iter3 = tmp24();
                  iter2 = iter3;
                  tmp10 = flag3;
                  let tmp52 = tmp63;
                  let tmp53 = StringResult;
                  let tmp54 = obj;
                  let tmp55 = num3;
                  let tmp56 = entries1;
                  let tmp57 = num5;
                  let tmp58 = entries2;
                  let tmp59 = iter3;
                  let tmp60 = length3;
                  let tmp61 = tmp24;
                  tmp11 = tmp40;
                  tmp12 = tmp41;
                  if (iter3.done) {
                    break;
                  }
                }
              }
            }
            num = num + 1;
            flag = tmp10;
            let tmp = tmp11;
            let tmp2 = tmp12;
            flag2 = tmp10;
          } while (num < entries.length);
        }
        const Storage = callback(closure_2[14]).Storage;
        const result1 = Storage.set(callback2(id.getId()), true);
        return flag2;
      }, callback(closure_2[15]).UserSettingsDelay.AUTOMATED);
    }
  }();
}
function writeRemoteSettings() {
  const PreloadedUserSettingsActionCreators = arg1(dependencyMap[15]).PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
    let closure_1 = false;
    const result = arg0(closure_2[18]).drainPendingAudioSettings((arg0, arg1, arg2) => {
      arg0 = arg2;
      let tmp = closure_1;
      if (!closure_1) {
        tmp = callback(arg0, arg1, arg0, (arg0) => {
          const merged = Object.assign(arg0, arg2);
        });
      }
      closure_1 = tmp;
    });
    return closure_1;
  }, arg1(dependencyMap[15]).UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function handleSetLocalVolume(arg0) {
  let context;
  let userId;
  let volume;
  ({ context, userId, volume } = arg0);
  if (userId !== store.getId()) {
    const remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      let obj = { muted: closure_12.isLocalMute(userId, context), volume };
      callback3(remoteSessionId, userId, context, obj);
    }
    obj = { volume };
    const result = arg1(dependencyMap[18]).updatePendingSettings(context, userId, obj);
    lib();
    const obj2 = arg1(dependencyMap[18]);
  }
}
function handleSetLocalMute(arg0) {
  let context;
  let userId;
  ({ context, userId } = arg0);
  if (userId !== store.getId()) {
    let obj = arg1(dependencyMap[18]);
    obj = { muted: closure_12.isLocalMute(userId, context) };
    const result = obj.updatePendingSettings(context, userId, obj);
    lib.cancel();
    writeRemoteSettings();
    const isLocalMuteResult = closure_12.isLocalMute(userId, context);
  }
}
function handleSetLocalSoundboardMute(userId) {
  userId = userId.userId;
  if (userId !== store.getId()) {
    const result = localSoundboardMuted.isLocalSoundboardMuted(userId);
    let obj = arg1(dependencyMap[18]);
    obj = { soundboardMuted: result };
    const result1 = obj.updatePendingSettings(userId.context, userId, obj);
    lib.cancel();
    writeRemoteSettings();
  }
}
function handleResetMediaEngineSettings(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
    throw undefined;
  } else {
    const PreloadedUserSettingsActionCreators = arg1(dependencyMap[15]).PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      arg0.user = {};
      arg0.stream = {};
    }, arg1(dependencyMap[15]).UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
const MediaEngineContextTypes = arg1(dependencyMap[10]).MediaEngineContextTypes;
function SETTINGS_MIGRATION_KEY(arg0) {
  return "AudioContextSettingsMigrated:" + arg0;
}
function DEFAULT_VOLUME_FOR_CONTEXT(arg0) {
  if (arg0 === MediaEngineContextTypes.STREAM) {
    let USER = arg1(dependencyMap[11]).AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = arg1(dependencyMap[11]).AudioSettingsDefaultVolumes.USER;
  }
  return USER;
}
let closure_16 = importDefault(dependencyMap[17]).debounce(() => {
  writeRemoteSettings();
}, 2000);
const importDefaultResult = importDefault(dependencyMap[17]);
let closure_17 = importDefault(dependencyMap[17]).debounce(arg1(dependencyMap[19]).remoteAudioSettingsUpdate, 500, { maxWait: 500 });
let tmp2 = (arg0) => {
  class AudioSettingsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, AudioSettingsManager);
      items1 = [...items];
      obj = closure_6(AudioSettingsManager);
      tmp2 = closure_5;
      if (closure_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj = { POST_CONNECTION_OPEN: closure_22, AUDIO_SET_LOCAL_VOLUME: closure_24, AUDIO_TOGGLE_LOCAL_MUTE: closure_25, AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: closure_26, MEDIA_ENGINE_RESET_SETTINGS: closure_27 };
      tmp2Result.actions = obj;
      return tmp2Result;
    }
  }
  const arg1 = AudioSettingsManager;
  callback2(AudioSettingsManager, arg0);
  return callback(AudioSettingsManager);
}(importDefault(dependencyMap[20]));
tmp2 = new tmp2();
const importDefaultResult1 = importDefault(dependencyMap[17]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/user_settings/voice/AudioSettingsManager.tsx");

export default tmp2;
