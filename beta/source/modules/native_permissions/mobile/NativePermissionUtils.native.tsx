// Module ID: 5458
// Function ID: 5459
// Name: mobile/NativePermissionUtils
// Dependencies: [5, 19, 17, 5045, 21, 1364, 1610, 5455, 3, 5459, 5461, 1981, 5205, 1115, 2]

// Module 5458 (mobile/NativePermissionUtils)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 5455 */;
import react_nativeDefault from "react-native" /* 5459 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5045 */;
import PlatformUtils_mod from "PlatformUtils" /* 1364 */;
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1610 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c7, c8;

let NativePermissionTypes;
let fn;
let fn2;
let items1;
let items4;
let items6;
let items9;
let metroRequire;
let tmp7;
let tmp9;
function combineStatuses() {
  return obj(...arguments);
}
let requestPermissionLookup = function _combineStatuses() {
  let obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let c0;
        let closure_1;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp2;
            c0 = undefined;
            let closure_2 = closure_0;
            closure_1 = closure_0[Symbol.iterator]();
          }
        } else if (1 === tmp5) {
          let c6 = 0;
          closure_1.return();
          throw NativeModules;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_1.return();
          c8 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = value;
          if (closure_1 !== closure_132_6.AUTHORIZED) {
            c6 = 0;
            let tmp11 = closure_1;
            closure_1.return();
            c8 = 3;
            let obj = { value: tmp11, done: true };
            return obj;
          } else {
            c6 = 0;
          }
        }
        if (closure_1 === undefined) {
          c8 = 3;
          let obj5 = { value: closure_132_6.AUTHORIZED, done: true };
          return obj5;
        } else {
          c6 = 1;
          c0 = tmp19;
          c7 = 2;
          c8 = 1;
          let obj6 = { value: c0(), done: false };
          return obj6;
        }
      }
    }
  });
  return obj(...arguments);
};
const NativeModules = react_native.NativeModules;
const Platform = react_native.Platform;
({ NativePermissionTypes, NativePermissionStatus: metroRequire } = NativePermissionConstants);
const jsx = Fragment.jsx;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  let num = 28;
  PlatformUtils = Platform.constants.Version <= 28;
}
let MetaQuestUtils = MetaQuestUtils_mod;
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
if (PlatformUtils) {
  let items = [NativeModules.NativePermissionManager.requestExternalStorageAuthorization];
  items1 = items;
} else {
  items1 = [];
}
const items2 = [...items1];
const NativePermissionManager = NativeModules.NativePermissionManager;
if (MetaQuestUtils) {
  const items3 = [NativePermissionManager.requestAvatarCameraAuthorization];
  items4 = items3;
} else {
  items4 = [NativePermissionManager.requestCameraAuthorization];
}
HermesBuiltin.arraySpread(items2, items4, tmp7);
if (PlatformUtils) {
  const items5 = [NativeModules.NativePermissionManager.hasExternalStorageAuthorization];
  items6 = items5;
} else {
  items6 = [];
}
const items7 = [...items6];
const NativePermissionManager2 = NativeModules.NativePermissionManager;
if (MetaQuestUtils) {
  const items8 = [NativePermissionManager2.hasAvatarCameraAuthorization];
  items9 = items8;
} else {
  items9 = [NativePermissionManager2.hasCameraAuthorization];
}
HermesBuiltin.arraySpread(items7, items9, tmp9);
const NativePermissionBaseUtils = NativePermissionBaseUtils2.NativePermissionBaseUtils;
class NativePermissionIOSUtils extends NativePermissionBaseUtils {
  requestPermissionCore(arg0, arg1) {
    return this.performRequest(NativePermissionIOSUtils.requestPermissionLookup, arg0, arg1);
  }
  hasPermissionCore(arg0, arg1) {
    return this.performRequest(NativePermissionIOSUtils.hasPermissionLookup, arg0, arg1);
  }
  performRequest(hasPermissionLookup, arg1, arg2) {
    let resolved;
    if (null == hasPermissionLookup[arg1]) {
      const self2 = this;
      const self3 = this;
      const _HermesInternal = HermesInternal;
      const obj = new LoggerDefault("NativePermissionUtils");
      obj.error("Unable to locate permission type " + arg1);
      resolved = Promise.resolve(false);
    } else {
      const self = this;
      resolved = this.requestAuthorization(arg1, tmp, arg2);
    }
    return resolved;
  }
  didHavePermission(arg0) {
    const storage = this.storage;
    return storage.hasPermission(arg0);
  }
  openSettings() {
    react_nativeDefault();
  }
  openAlertModal(arg0) {
    let body;
    let onConfirm;
    let paths;
    ({ body, onConfirm } = arg0);
    react.lazy(() => require("asyncRequire")(paths[10], paths.paths));
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    const intl = intl2.intl;
    openAlert("permission-denied", <lazyResult title={intl.string(intl2.t.sMFVrS)} body={body} onConfirm={onConfirm} />);
  }
}
const prototype = NativePermissionIOSUtils.prototype;
requestPermissionLookup = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items2), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.requestHeadsetCameraAuthorization };
const AUDIO = NativePermissionTypes.AUDIO;
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  fn = () => {
    const items = [NativeModules.NativePermissionManager.requestMicrophoneAuthorization, NativeModules.NativePermissionManager.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = NativeModules.NativePermissionManager.requestMicrophoneAuthorization;
}
requestPermissionLookup[AUDIO] = fn;
requestPermissionLookup[NativePermissionTypes.PHOTOS] = NativeModules.NativePermissionManager.requestPhotoAuthorization;
requestPermissionLookup[NativePermissionTypes.CONTACTS] = NativeModules.NativePermissionManager.requestContactsAuthorization;
requestPermissionLookup[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(metroRequire.AUTHORIZED);
NativePermissionIOSUtils.requestPermissionLookup = requestPermissionLookup;
let obj2 = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items7), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.hasHeadsetCameraAuthorization };
const AUDIO2 = NativePermissionTypes.AUDIO;
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  fn2 = () => {
    const items = [NativeModules.NativePermissionManager.hasMicrophoneAuthorization, NativeModules.NativePermissionManager.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = NativeModules.NativePermissionManager.hasMicrophoneAuthorization;
}
obj2[AUDIO2] = fn2;
obj2[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(metroRequire.AUTHORIZED);
NativePermissionIOSUtils.hasPermissionLookup = obj2;
const nativePermissionIOSUtils = new NativePermissionIOSUtils();
const result = size.fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default nativePermissionIOSUtils;
