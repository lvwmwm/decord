// Module ID: 4193
// Function ID: 35997
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4193 (_isNativeReflectConstruct)
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
  if (null != closure_10[arg0]) {
    tmp = arg2(tmp2);
  }
  return tmp;
}
function updateDevicesForApplication(applicationId, devices) {
  if (null != closure_9[applicationId]) {
    const item = arr.forEach((id) => {
      delete r1[r0];
      return id.id;
    });
  }
  closure_9[applicationId] = devices;
  const item1 = devices.forEach((id) => {
    closure_10[id.id] = id;
    return id;
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const DeviceTypes = arg1(dependencyMap[5]).DeviceTypes;
let closure_9 = {};
let closure_10 = {};
let closure_11 = 0;
let tmp2 = (Store) => {
  class CertifiedDeviceStore {
    constructor() {
      self = this;
      tmp = closure_3(this, CertifiedDeviceStore);
      obj = closure_6(CertifiedDeviceStore);
      tmp2 = closure_5;
      if (closure_12()) {
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
  const arg1 = CertifiedDeviceStore;
  callback2(CertifiedDeviceStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const Storage = CertifiedDeviceStore(closure_2[6]).Storage;
      const value = Storage.get("CertifiedDeviceStore");
      if (null != value) {
        const item = callback(closure_2[7]).forEach(value, (arr) => {
          const item = arr.forEach((type) => {
            if (tmp) {
              type.hardwareMute = false;
            }
          });
          callback(arg1, arr);
        });
        const arr = callback(closure_2[7]);
      }
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "isCertified",
    value(arg0) {
      return null != closure_10[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getCertifiedDevice",
    value(arg0) {
      return closure_10[arg0];
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
      const CertifiedDeviceStore = arg0;
      return callback(closure_2[7]).find(closure_10, (type) => type.type === type);
    }
  };
  items[5] = {
    key: "isHardwareMute",
    value(arg0) {
      return callback5(arg0, false, (type) => type.type === constants.AUDIO_INPUT && type.hardwareMute);
    }
  };
  items[6] = {
    key: "hasEchoCancellation",
    value(arg0) {
      return callback5(arg0, false, (type) => type.type === constants.AUDIO_INPUT && type.echoCancellation);
    }
  };
  items[7] = {
    key: "hasNoiseSuppression",
    value(arg0) {
      return callback5(arg0, false, (type) => type.type === constants.AUDIO_INPUT && type.noiseSuppression);
    }
  };
  items[8] = {
    key: "hasAutomaticGainControl",
    value(arg0) {
      return callback5(arg0, false, (type) => type.type === constants.AUDIO_INPUT && type.automaticGainControl);
    }
  };
  items[9] = {
    key: "getVendor",
    value(arg0) {
      return callback5(arg0, null, (vendor) => vendor.vendor);
    }
  };
  items[10] = {
    key: "getModel",
    value(arg0) {
      return callback5(arg0, null, (model) => model.model);
    }
  };
  items[11] = {
    key: "getRevision",
    value() {
      return closure_11;
    }
  };
  return callback(CertifiedDeviceStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "CertifiedDeviceStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  CERTIFIED_DEVICES_SET: function handleSetCertifiedDevices(applicationId) {
    updateDevicesForApplication(applicationId.applicationId, applicationId.devices);
    const Storage = arg1(dependencyMap[6]).Storage;
    const result = Storage.set("CertifiedDeviceStore", closure_9);
    closure_11 = closure_11 + 1;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("stores/CertifiedDeviceStore.tsx");

export default tmp2;
