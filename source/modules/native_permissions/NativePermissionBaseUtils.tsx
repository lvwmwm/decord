// Module ID: 4677
// Function ID: 40730
// Name: NativePermissionBaseUtils
// Dependencies: [1553, 2, 27, 4687, 4689, 6, 7, 15, 17, 18]

// Module 4677 (NativePermissionBaseUtils)
import isMetaQuest from "isMetaQuest";
import result2 from "result2";
import keys from "keys";
import module_4687 from "module_4687";
import RNCImageCropPicker from "RNCImageCropPicker";
import { AnalyticEvents } from "_classCallCheck";
import _inherits from "_inherits";

({ NativePermissionTypes: closure_7, NativePermissionStates: closure_8, NativePermissionStatus: closure_9 } = RNCImageCropPicker);
const result = _inherits.fileFinishedImporting("modules/native_permissions/NativePermissionBaseUtils.tsx");

export const NativePermissionBaseUtils = () => {
  class NativePermissionBaseUtils {
    constructor() {
      tmp = result2(this, NativePermissionBaseUtils);
      tmp2 = new module_4687();
      this.storage = tmp2;
      return;
    }
  }
  const importDefault = NativePermissionBaseUtils;
  let obj = { key: "requestAuthorization" };
  let closure_0 = callback(async function(arg0, arg1, arg2) {
    const self = this;
    if ("function" !== typeof arg1) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("requestAuthorization: Was provided with not a function for " + arg0 + ".");
      throw error;
    } else {
      let obj = { type: arg0 };
      callback(closure_2[6]).track(constants2.PERMISSIONS_REQUESTED, obj);
      const tmp20 = yield arg1();
      let tmp2 = tmp20 === constants.AUTHORIZED;
      if (!tmp2) {
        tmp2 = tmp20 === constants.LIMITED;
      }
      obj = callback(closure_2[7]);
      obj.setPermission(arg0, tmp2 ? closure_8.ACCEPTED : closure_8.DENIED);
      let showAuthorizationError = !tmp2;
      if (!tmp2) {
        showAuthorizationError = arg2.showAuthorizationError;
      }
      if (showAuthorizationError) {
        self.showAlert(arg0);
      }
      return tmp2;
    }
  });
  obj.value = function requestAuthorization(arg0, arg1, arg2) {
    return callback(...arguments);
  };
  const items = [obj, , , ];
  obj = {
    key: "requestPermission",
    value(arg0, arg1) {
      return this.requestPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
    }
  };
  items[1] = obj;
  obj = {
    key: "hasPermission",
    value(arg0, arg1) {
      return this.hasPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
    }
  };
  items[2] = obj;
  items[3] = {
    key: "showAlert",
    value(arg0) {
      const self = this;
      const callback = this;
      const NativePermissionBaseUtils = arg0;
      const intl = callback(closure_2[8]).intl;
      const intl2 = callback(closure_2[8]).intl;
      const combined = "" + intl.string(callback(closure_2[8]).t.68G7fD) + ". " + intl2.string(callback(closure_2[8]).t.5Jvu1R);
      let obj = { [closure_7.CAMERA]: combined, [closure_7.HEADSET_CAMERA]: combined };
      const intl3 = callback(closure_2[8]).intl;
      const stringResult = intl.string(callback(closure_2[8]).t.68G7fD);
      const intl4 = callback(closure_2[8]).intl;
      obj[constants.AUDIO] = "" + intl3.string(callback(closure_2[8]).t.xisTfe) + ". " + intl4.string(callback(closure_2[8]).t.5Jvu1R);
      const intl5 = callback(closure_2[8]).intl;
      const stringResult1 = intl3.string(callback(closure_2[8]).t.xisTfe);
      const intl6 = callback(closure_2[8]).intl;
      obj[constants.PHOTOS] = "" + intl5.string(callback(closure_2[8]).t.jQHU4M) + ". " + intl6.string(callback(closure_2[8]).t.5Jvu1R);
      const intl7 = callback(closure_2[8]).intl;
      const stringResult2 = intl5.string(callback(closure_2[8]).t.jQHU4M);
      const intl8 = callback(closure_2[8]).intl;
      obj[constants.INPUT_MONITORING] = "" + intl7.string(callback(closure_2[8]).t.UIBqsS) + ". " + intl8.string(callback(closure_2[8]).t.5Jvu1R);
      const intl9 = callback(closure_2[8]).intl;
      const stringResult3 = intl7.string(callback(closure_2[8]).t.UIBqsS);
      const intl10 = callback(closure_2[8]).intl;
      obj[constants.CONTACTS] = "" + intl9.string(callback(closure_2[8]).t.kTtf7o) + ". " + intl10.string(callback(closure_2[8]).t.5Jvu1R);
      if (null != obj[arg0]) {
        obj = {};
        const intl11 = callback(closure_2[8]).intl;
        obj.title = intl11.string(callback(closure_2[8]).t.u1Gxpu);
        obj.body = tmp7;
        obj.onConfirm = function onConfirm() {
          return self.openSettings(arg0);
        };
        const intl12 = callback(closure_2[8]).intl;
        obj.cancelText = intl12.string(callback(closure_2[8]).t.ETE/oC);
        const intl13 = callback(closure_2[8]).intl;
        obj.confirmText = intl13.string(callback(closure_2[8]).t.XgZk+u);
        self.openAlertModal(obj);
      }
    }
  };
  const items1 = [
    {
      key: "defaultNativePermissionsRequestOptions",
      value(arg0) {
        let obj = { showAuthorizationError: true };
        let tmp = obj;
        if (null != arg0) {
          obj = {};
          const merged = Object.assign(obj);
          const merged1 = Object.assign(arg0);
          tmp = obj;
        }
        return tmp;
      }
    }
  ];
  return callback2(NativePermissionBaseUtils, items, items1);
}();
