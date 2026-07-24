// Module ID: 4201
// Function ID: 36093
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 4191, 587, 22, 566, 686, 2]

// Module 4201 (_isNativeReflectConstruct)
import Storage from "Storage";
import apply from "apply";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { DeviceTypes } from "DesktopSources";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getOrElse(arg0, arg1, arg2) {
  let tmp = arg1;
  if (null != table2[arg0]) {
    tmp = arg2(tmp2);
  }
  return tmp;
}
function updateDevicesForApplication(applicationId, devices) {
  if (null != table[applicationId]) {
    const item = arr.forEach((id) => {
      delete tmp2[tmp];
      return id.id;
    });
  }
  table[applicationId] = devices;
  const item1 = devices.forEach((id) => {
    outer1_10[id.id] = id;
    return id;
  });
}
let closure_9 = {};
let closure_10 = {};
let c11 = 0;
let tmp2 = ((Store) => {
  class CertifiedDeviceStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, CertifiedDeviceStore);
      obj = outer1_6(CertifiedDeviceStore);
      tmp2 = outer1_5;
      if (outer1_12()) {
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
  callback2(CertifiedDeviceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const Storage = CertifiedDeviceStore(outer1_2[6]).Storage;
      const value = Storage.get("CertifiedDeviceStore");
      if (null != value) {
        let item = outer1_1(outer1_2[7]).forEach(value, (arr) => {
          const item = arr.forEach((type) => {
            if (tmp) {
              type.hardwareMute = false;
            }
          });
          outer2_14(arg1, arr);
        });
        const arr = outer1_1(outer1_2[7]);
      }
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "isCertified",
    value(arg0) {
      return null != outer1_10[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getCertifiedDevice",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCertifiedDeviceName",
    value(arg0, arg1) {
      let combined = arg1;
      const certifiedDevice = this.getCertifiedDevice(arg0);
      if (null != certifiedDevice) {
        const _HermesInternal = HermesInternal;
        combined = "" + certifiedDevice.vendor.name + " " + certifiedDevice.model.name;
      }
      return combined;
    }
  };
  items[4] = {
    key: "getCertifiedDeviceByType",
    value(arg0) {
      let closure_0 = arg0;
      return outer1_1(outer1_2[7]).find(outer1_10, (type) => type.type === closure_0);
    }
  };
  items[5] = {
    key: "isHardwareMute",
    value(arg0) {
      return outer1_13(arg0, false, (type) => type.type === outer2_8.AUDIO_INPUT && type.hardwareMute);
    }
  };
  items[6] = {
    key: "hasEchoCancellation",
    value(arg0) {
      return outer1_13(arg0, false, (type) => type.type === outer2_8.AUDIO_INPUT && type.echoCancellation);
    }
  };
  items[7] = {
    key: "hasNoiseSuppression",
    value(arg0) {
      return outer1_13(arg0, false, (type) => type.type === outer2_8.AUDIO_INPUT && type.noiseSuppression);
    }
  };
  items[8] = {
    key: "hasAutomaticGainControl",
    value(arg0) {
      return outer1_13(arg0, false, (type) => type.type === outer2_8.AUDIO_INPUT && type.automaticGainControl);
    }
  };
  items[9] = {
    key: "getVendor",
    value(arg0) {
      return outer1_13(arg0, null, (vendor) => vendor.vendor);
    }
  };
  items[10] = {
    key: "getModel",
    value(arg0) {
      return outer1_13(arg0, null, (model) => model.model);
    }
  };
  items[11] = {
    key: "getRevision",
    value() {
      return outer1_11;
    }
  };
  return callback(CertifiedDeviceStore, items);
})(require("initialize").Store);
tmp2.displayName = "CertifiedDeviceStore";
tmp2 = new tmp2(require("dispatcher"), {
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices(applicationId) {
    updateDevicesForApplication(applicationId.applicationId, applicationId.devices);
    const Storage = require(587) /* Storage */.Storage;
    const result = Storage.set("CertifiedDeviceStore", closure_9);
    closure_11 = closure_11 + 1;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/CertifiedDeviceStore.tsx");

export default tmp2;
