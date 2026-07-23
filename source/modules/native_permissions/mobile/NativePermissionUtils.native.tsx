// Module ID: 4682
// Function ID: 40790
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 5, 31, 27, 4344, 33, 477, 1553, 3, 4683, 4685, 1934, 4472, 1212, 4679, 2]

// Module 4682 (_createForOfIteratorHelperLoose)
import result from "result";
import getActivityIndicator from "get ActivityIndicator";
import maybeLoadBundle from "maybeLoadBundle";
import getSystemLocale from "getSystemLocale";
import NativePermissionBaseUtils from "NativePermissionBaseUtils";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import NativePermissionStatus from "NativePermissionStatus";
import { jsx } from "jsxProd";
import set from "set";
import isMetaQuest from "isMetaQuest";
import set from "set";
import set from "set";
import set from "_possibleConstructorReturn";

let NativePermissionTypes;
let closure_11;
const require = arg1;
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
  const tmp = outer2_15(arg0);
  if (!iter.done) {
    while (true) {
      let tmp4 = outer2_11;
      if (tmp3 !== outer2_11.AUTHORIZED) {
        break;
      } else {
        let iter2 = tmp();
        let tmp2 = iter2;
      }
    }
  }
  return outer2_11.AUTHORIZED;
}
const NativeModules = get_ActivityIndicator.NativeModules;
({ NativePermissionTypes, NativePermissionStatus: closure_11 } = NativePermissionStatus);
set = set.isAndroid();
if (set) {
  set = get_ActivityIndicator.Platform.constants.Version <= 28;
}
isMetaQuest = isMetaQuest.isMetaQuest();
if (set) {
  let items = [NativeModules.NativePermissionManager.requestExternalStorageAuthorization];
  let items1 = items;
} else {
  items1 = [];
}
const items2 = [...items1];
const NativePermissionManager = NativeModules.NativePermissionManager;
if (isMetaQuest) {
  const items3 = [NativePermissionManager.requestAvatarCameraAuthorization];
  let items4 = items3;
} else {
  items4 = [NativePermissionManager.requestCameraAuthorization];
}
HermesBuiltin.arraySpread(items4, tmp6);
if (set) {
  const items5 = [NativeModules.NativePermissionManager.hasExternalStorageAuthorization];
  let items6 = items5;
} else {
  items6 = [];
}
const items7 = [...items6];
const NativePermissionManager2 = NativeModules.NativePermissionManager;
if (isMetaQuest) {
  const items8 = [NativePermissionManager2.hasAvatarCameraAuthorization];
  let items9 = items8;
} else {
  items9 = [NativePermissionManager2.hasCameraAuthorization];
}
HermesBuiltin.arraySpread(items9, tmp8);
let tmp10 = ((NativePermissionBaseUtils) => {
  class NativePermissionIOSUtils {
    constructor() {
      self = this;
      tmp = outer1_3(this, NativePermissionIOSUtils);
      obj = outer1_6(NativePermissionIOSUtils);
      tmp2 = outer1_5;
      if (outer1_17()) {
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
        let tmp6 = outer1_1(outer1_2[12]);
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
      outer1_1(outer1_2[13])();
    }
  };
  items[5] = {
    key: "openAlertModal",
    value(arg0) {
      let body;
      let onConfirm;
      ({ body, onConfirm } = arg0);
      let obj = NativePermissionIOSUtils(outer1_2[16]);
      obj = {};
      const intl = NativePermissionIOSUtils(outer1_2[17]).intl;
      obj.title = intl.string(NativePermissionIOSUtils(outer1_2[17]).t.sMFVrS);
      obj.body = body;
      obj.onConfirm = onConfirm;
      obj.openAlert("permission-denied", outer1_12(outer1_9.lazy(() => NativePermissionIOSUtils(outer2_2[15])(outer2_2[14], outer2_2.paths)), obj));
    }
  };
  return callback(NativePermissionIOSUtils, items);
})(require("NativePermissionBaseUtils").NativePermissionBaseUtils);
set = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items2), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.requestHeadsetCameraAuthorization };
if (set.isAndroid()) {
  let fn = () => {
    const items = [NativeModules.NativePermissionManager.requestMicrophoneAuthorization, NativeModules.NativePermissionManager.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = NativeModules.NativePermissionManager.requestMicrophoneAuthorization;
}
set[NativePermissionTypes.AUDIO] = fn;
set[NativePermissionTypes.PHOTOS] = NativeModules.NativePermissionManager.requestPhotoAuthorization;
set[NativePermissionTypes.CONTACTS] = NativeModules.NativePermissionManager.requestContactsAuthorization;
set[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
tmp10.requestPermissionLookup = set;
set = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items7), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.hasHeadsetCameraAuthorization };
if (set.isAndroid()) {
  let fn2 = () => {
    const items = [NativeModules.NativePermissionManager.hasMicrophoneAuthorization, NativeModules.NativePermissionManager.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = NativeModules.NativePermissionManager.hasMicrophoneAuthorization;
}
set[NativePermissionTypes.AUDIO] = fn2;
set[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
tmp10.hasPermissionLookup = set;
tmp10 = new tmp10();
let result = set.fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default tmp10;
