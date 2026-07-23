// Module ID: 15994
// Function ID: 123681
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 57, 4144, 4578, 1194, 4177, 4191, 8846, 21, 1282, 587, 1331, 8845, 22, 12831, 9040, 5078, 2]

// Module 15994 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import apply from "apply";
import makeContextUserKey from "makeContextUserKey";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { MediaEngineContextTypes } from "DesktopSources";
import importDefaultResult from "apply";
import tmp2 from "AutomaticLifecycleManager";
import importDefaultResult1 from "apply";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  let obj = require(8845) /* snapVolumeToDefault */;
  const result = obj.coerceAudioContextForProto(arg2);
  if (null == result) {
    return false;
  } else {
    obj = tmp15[arg1];
    if (null == obj) {
      const AudioContextSetting = require(1282) /* _callSuper */.AudioContextSetting;
      obj = { muted: false, volume: DEFAULT_VOLUME_FOR_CONTEXT(arg2) };
      obj = AudioContextSetting.create(obj);
    }
    arg0[result][arg1] = obj;
    arg3(arg0[result][arg1]);
    const _String = String;
    const _Date = Date;
    arg0[result][arg1].modifiedAt = String(Date.now());
    if (flag) {
      if (!tmp12) {
        delete tmp2[tmp];
      }
      tmp12 = tmp15[arg1].volume !== DEFAULT_VOLUME_FOR_CONTEXT(arg2) || tmp15[arg1].muted || tmp15[arg1].soundboardMuted;
    }
    (function trimOldestEntries(arg0) {
      let diff;
      const entries = outer1_1(outer1_2[12]).entries(arg0);
      if (entries.length > 300) {
        let num3 = 0;
        if (0 < length - 300) {
          do {
            let tmp4 = outer1_8;
            let first = outer1_8(tmp3[num3], 1)[0];
            delete tmp2[tmp];
            num3 = num3 + 1;
            diff = length - 300;
          } while (num3 < diff);
        }
      }
    })(arg0[result]);
    return true;
  }
}
function handleConnectionOpen() {
  (function handleMigrateSettings() {
    let Storage = outer1_0(outer1_2[14]).Storage;
    if (!Storage.get(outer1_14(outer1_11.getId()))) {
      const PreloadedUserSettingsActionCreators = outer1_0(outer1_2[15]).PreloadedUserSettingsActionCreators;
      PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
        let tmp40;
        let tmp41;
        let tmp5;
        let tmp6;
        const entries = Object.entries(outer2_12.getState().settingsByContext);
        let flag = false;
        let num = 0;
        let flag2 = false;
        if (0 < entries.length) {
          do {
            let tmp3 = outer2_8;
            let tmp4 = outer2_8(entries[num], 2);
            [tmp5, tmp6] = tmp4;
            let tmp7 = outer2_0;
            let tmp8 = outer2_2;
            let obj = outer2_0(outer2_2[16]);
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
                  let tmp13 = outer2_8;
                  let tmp14 = outer2_8(entries1[num2], 2);
                  obj = { muted: tmp14[1] };
                  let tmp15 = outer2_15;
                  obj.volume = outer2_15(tmp5);
                  obj.modifiedAt = StringResult;
                  obj.soundboardMuted = false;
                  obj[tmp14[0]] = obj;
                  num2 = num2 + 1;
                  num3 = num2;
                  length = entries1.length;
                } while (num2 < length);
              }
              let _Object = Object;
              let entries2 = Object.entries(tmp6.localVolumes);
              let num4 = 0;
              let num5 = 0;
              if (0 < entries2.length) {
                do {
                  let tmp16 = outer2_8;
                  let tmp17 = outer2_8(entries2[num4], 2);
                  let first = tmp17[0];
                  let obj1 = { muted: false, modifiedAt: StringResult };
                  let tmp19 = obj1;
                  let merged = Object.assign(obj[first]);
                  let tmp21 = outer2_0;
                  let tmp22 = outer2_2;
                  let obj4 = outer2_0(outer2_2[16]);
                  obj1["volume"] = obj4.snapVolumeToDefault(tmp17[1], tmp5);
                  obj[first] = obj1;
                  num4 = num4 + 1;
                  num5 = num4;
                  length2 = entries2.length;
                } while (num4 < length2);
              }
              let _Object2 = Object;
              let length3 = Object.keys(tmp63).length;
              let tmp23 = outer2_19;
              let _Object3 = Object;
              let entries3 = Object.entries(obj);
              let tmp24 = outer2_19(entries3.entries());
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
                let tmp35 = outer2_8;
                let tmp36 = outer2_8(iter2.value, 2);
                let tmp38 = outer2_8;
                let tmp39 = outer2_8(tmp36[1], 2);
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
            tmp = tmp11;
            tmp2 = tmp12;
            flag2 = tmp10;
          } while (num < entries.length);
        }
        const Storage = outer2_0(outer2_2[14]).Storage;
        const result1 = Storage.set(outer2_14(outer2_11.getId()), true);
        return flag2;
      }, outer1_0(outer1_2[15]).UserSettingsDelay.AUTOMATED);
    }
  })();
}
function writeRemoteSettings() {
  const PreloadedUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.PreloadedUserSettingsActionCreators;
  PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
    let closure_0 = arg0;
    let c1 = false;
    const result = outer1_0(outer1_2[18]).drainPendingAudioSettings((arg0, arg1, arg2) => {
      let closure_0 = arg2;
      let tmp = c1;
      if (!c1) {
        tmp = outer2_21(closure_0, arg1, arg0, (arg0) => {
          const merged = Object.assign(arg0, closure_0);
        });
      }
      c1 = tmp;
    });
    return c1;
  }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION);
}
function handleSetLocalVolume(arg0) {
  let context;
  let userId;
  let volume;
  ({ context, userId, volume } = arg0);
  if (userId !== store.getId()) {
    remoteSessionId = remoteSessionId.getRemoteSessionId();
    if (null != remoteSessionId) {
      let obj = { muted: closure_12.isLocalMute(userId, context), volume };
      callback3(remoteSessionId, userId, context, obj);
    }
    obj = { volume };
    const result = require(12831) /* makeContextUserKey */.updatePendingSettings(context, userId, obj);
    lib();
    const obj2 = require(12831) /* makeContextUserKey */;
  }
}
function handleSetLocalMute(arg0) {
  let context;
  let userId;
  ({ context, userId } = arg0);
  if (userId !== store.getId()) {
    let obj = require(12831) /* makeContextUserKey */;
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
    let obj = require(12831) /* makeContextUserKey */;
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
    const PreloadedUserSettingsActionCreators = require(1331) /* _createForOfIteratorHelperLoose */.PreloadedUserSettingsActionCreators;
    PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", (arg0) => {
      arg0.user = {};
      arg0.stream = {};
    }, require(1331) /* _createForOfIteratorHelperLoose */.UserSettingsDelay.INFREQUENT_USER_ACTION);
  }
}
function SETTINGS_MIGRATION_KEY(arg0) {
  return "AudioContextSettingsMigrated:" + arg0;
}
function DEFAULT_VOLUME_FOR_CONTEXT(arg0) {
  if (arg0 === MediaEngineContextTypes.STREAM) {
    let USER = require(8846) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.STREAM;
  } else {
    USER = require(8846) /* AudioSettingsDefaultVolumes */.AudioSettingsDefaultVolumes.USER;
  }
  return USER;
}
let closure_16 = require("apply").debounce(() => {
  writeRemoteSettings();
}, 2000);
let closure_17 = require("apply").debounce(require("logRemoteCommand").remoteAudioSettingsUpdate, 500, { maxWait: 500 });
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/user_settings/voice/AudioSettingsManager.tsx");

export default tmp2;
