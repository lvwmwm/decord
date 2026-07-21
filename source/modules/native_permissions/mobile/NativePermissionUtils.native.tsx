// Module ID: 4680
// Function ID: 40756
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4680 (_createForOfIteratorHelperLoose)
let NativePermissionTypes;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function combineStatuses(items) {
  return _combineStatuses(...arguments);
}
async function _combineStatuses(arg0, arg1) {
  const tmp = callback(arg0);
  if (!iter.done) {
    while (true) {
      let tmp4 = constants;
      if (tmp3 !== constants.AUTHORIZED) {
        break;
      } else {
        let iter2 = tmp();
        let tmp2 = iter2;
      }
    }
  }
  return constants.AUTHORIZED;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importAll(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[7]);
const NativeModules = tmp2.NativeModules;
({ NativePermissionTypes, NativePermissionStatus: closure_11 } = arg1(dependencyMap[8]));
const jsx = arg1(dependencyMap[9]).jsx;
let obj = arg1(dependencyMap[10]);
let isAndroidResult = obj.isAndroid();
if (isAndroidResult) {
  isAndroidResult = tmp2.Platform.constants.Version <= 28;
}
const tmp3 = arg1(dependencyMap[8]);
const isMetaQuestResult = arg1(dependencyMap[11]).isMetaQuest();
if (isAndroidResult) {
  const items = [NativeModules.NativePermissionManager.requestExternalStorageAuthorization];
  let items1 = items;
} else {
  items1 = [];
}
const items2 = [...items1];
const NativePermissionManager = NativeModules.NativePermissionManager;
if (isMetaQuestResult) {
  const items3 = [NativePermissionManager.requestAvatarCameraAuthorization];
  let items4 = items3;
} else {
  items4 = [NativePermissionManager.requestCameraAuthorization];
}
HermesBuiltin.arraySpread(items4, tmp6);
if (isAndroidResult) {
  const items5 = [NativeModules.NativePermissionManager.hasExternalStorageAuthorization];
  let items6 = items5;
} else {
  items6 = [];
}
const items7 = [...items6];
const NativePermissionManager2 = NativeModules.NativePermissionManager;
if (isMetaQuestResult) {
  const items8 = [NativePermissionManager2.hasAvatarCameraAuthorization];
  let items9 = items8;
} else {
  items9 = [NativePermissionManager2.hasCameraAuthorization];
}
HermesBuiltin.arraySpread(items9, tmp8);
let tmp10 = (NativePermissionBaseUtils) => {
  class NativePermissionIOSUtils {
    constructor() {
      self = this;
      tmp = closure_3(this, NativePermissionIOSUtils);
      obj = closure_6(NativePermissionIOSUtils);
      tmp2 = closure_5;
      if (closure_17()) {
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
  const arg1 = NativePermissionIOSUtils;
  callback2(NativePermissionIOSUtils, NativePermissionBaseUtils);
  let obj = {
    key: "requestPermissionCore",
    value(arg0, arg1) {
      return this.performRequest(NativePermissionIOSUtils.requestPermissionLookup, arg0, arg1);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "hasPermissionCore",
    value(arg0, arg1) {
      return this.performRequest(NativePermissionIOSUtils.hasPermissionLookup, arg0, arg1);
    }
  };
  items[1] = obj;
  obj = {
    key: "performRequest",
    value(arg0, arg1, arg2) {
      const self = this;
      if (null == arg0[arg1]) {
        let tmp6 = callback(closure_2[12]);
        const prototype = tmp6.prototype;
        tmp6 = new tmp6("NativePermissionUtils");
        const _HermesInternal = HermesInternal;
        tmp6.error("Unable to locate permission type " + arg1);
        let resolved = Promise.resolve(false);
      } else {
        resolved = self.requestAuthorization(arg1, tmp, arg2);
      }
      return resolved;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "didHavePermission",
    value(arg0) {
      const storage = this.storage;
      return storage.hasPermission(arg0);
    }
  };
  items[4] = {
    key: "openSettings",
    value() {
      callback(closure_2[13])();
    }
  };
  items[5] = {
    key: "openAlertModal",
    value(arg0) {
      let body;
      let onConfirm;
      ({ body, onConfirm } = arg0);
      let obj = NativePermissionIOSUtils(closure_2[16]);
      obj = {};
      const intl = NativePermissionIOSUtils(closure_2[17]).intl;
      obj.title = intl.string(NativePermissionIOSUtils(closure_2[17]).t.sMFVrS);
      obj.body = body;
      obj.onConfirm = onConfirm;
      obj.openAlert("permission-denied", callback4(React.lazy(() => callback(paths[15])(paths[14], paths.paths)), obj));
    }
  };
  return callback(NativePermissionIOSUtils, items);
}(arg1(dependencyMap[18]).NativePermissionBaseUtils);
obj = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items2), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.requestHeadsetCameraAuthorization };
const obj2 = arg1(dependencyMap[11]);
if (obj4.isAndroid()) {
  let fn = () => {
    const items = [NativeModules.NativePermissionManager.requestMicrophoneAuthorization, NativeModules.NativePermissionManager.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = NativeModules.NativePermissionManager.requestMicrophoneAuthorization;
}
obj[NativePermissionTypes.AUDIO] = fn;
obj[NativePermissionTypes.PHOTOS] = NativeModules.NativePermissionManager.requestPhotoAuthorization;
obj[NativePermissionTypes.CONTACTS] = NativeModules.NativePermissionManager.requestContactsAuthorization;
obj[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
tmp10.requestPermissionLookup = obj;
obj = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items7), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.hasHeadsetCameraAuthorization };
const obj4 = arg1(dependencyMap[10]);
if (obj6.isAndroid()) {
  let fn2 = () => {
    const items = [NativeModules.NativePermissionManager.hasMicrophoneAuthorization, NativeModules.NativePermissionManager.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = NativeModules.NativePermissionManager.hasMicrophoneAuthorization;
}
obj[NativePermissionTypes.AUDIO] = fn2;
obj[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
tmp10.hasPermissionLookup = obj;
tmp10 = new tmp10();
const obj6 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default tmp10;
