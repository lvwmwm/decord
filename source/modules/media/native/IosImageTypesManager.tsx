// Module ID: 4694
// Function ID: 40863
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4694 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const NativeModules = arg1(dependencyMap[6]).NativeModules;
let importDefaultResult = importDefault(dependencyMap[7]);
importDefaultResult = new importDefaultResult("IosImageTypesManager");
let closure_8 = null;
let closure_9 = null;
let closure_10 = null;
let closure_11 = null;
let tmp4 = (arg0) => {
  class IosImageTypesManager {
    constructor() {
      self = this;
      tmp = closure_1(this, IosImageTypesManager);
      obj = closure_4(IosImageTypesManager);
      tmp2 = closure_3;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = IosImageTypesManager;
  callback2(IosImageTypesManager, arg0);
  let obj = {
    key: "_initialize",
    value() {
      const result = this.initializeSupportedImageTypes();
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "_terminate",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "initializeSupportedImageTypes",
    value() {
      let sum;
      let tmp5;
      if (null === supportedImageTypes) {
        const MediaManager = MediaManager.MediaManager;
        const supportedImageTypes = MediaManager.getSupportedImageTypes();
        const _Set = Set;
        const set = new Set();
        const _Set2 = Set;
        const set1 = new Set();
        const _Set3 = Set;
        const set2 = new Set();
        let num = 0;
        const _Object = Object;
        const entries = Object.entries(supportedImageTypes);
        if (0 < entries.length) {
          do {
            let tmp = entries;
            let tmp2 = num;
            let tmp3 = closure_0;
            let tmp4 = closure_0(arr2[num], 2);
            [r10015, tmp5] = tmp4;
            let extension = tmp5.extension;
            let tmp6 = extension;
            let mimeType = tmp5.mimeType;
            let tmp7 = null != extension;
            let tmp8 = tmp7;
            if (tmp7) {
              let tmp9 = extension;
              tmp8 = "" !== tmp6;
            }
            if (tmp8) {
              let tmp10 = set;
              let tmp11 = extension;
              let addResult = obj2.add(tmp6);
            }
            let tmp13 = mimeType;
            let tmp14 = null != mimeType;
            let tmp15 = tmp14;
            if (tmp14) {
              let tmp16 = mimeType;
              tmp15 = "" !== mimeType;
            }
            if (tmp15) {
              let tmp17 = set1;
              let tmp18 = mimeType;
              let addResult1 = obj3.add(mimeType);
            }
            let tmp20 = num;
            sum = num + 1;
            num = sum;
            let tmp22 = entries;
          } while (sum < arr2.length);
        }
        set.add("jpg");
        set2.add("gif");
        set2.add("webp");
        const obj2 = set;
        const obj3 = set1;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSupportedImageTypes",
    value() {
      return closure_8;
    }
  };
  items[4] = {
    key: "isImageTypeSupported",
    value(arg0) {
      let tmp = null !== closure_8;
      if (tmp) {
        tmp = arg0 in closure_8;
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getSupportedExtensions",
    value() {
      return closure_9;
    }
  };
  items[6] = {
    key: "getSupportedMimeTypes",
    value() {
      return closure_10;
    }
  };
  items[7] = {
    key: "getAnimatedExtensions",
    value() {
      return closure_11;
    }
  };
  items[8] = {
    key: "isExtensionSupported",
    value(arg0) {
      let hasItem = null !== set;
      if (hasItem) {
        hasItem = set.has(arg0);
      }
      return hasItem;
    }
  };
  items[9] = {
    key: "isMimeTypeSupported",
    value(arg0) {
      let hasItem = null !== set2;
      if (hasItem) {
        hasItem = set2.has(arg0);
      }
      return hasItem;
    }
  };
  items[10] = {
    key: "isExtensionAnimated",
    value(arg0) {
      let hasItem = null !== set3;
      if (hasItem) {
        hasItem = set3.has(arg0);
      }
      return hasItem;
    }
  };
  return callback(IosImageTypesManager, items);
}(importDefault(dependencyMap[8]));
tmp4 = new tmp4();
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/media/native/IosImageTypesManager.tsx");

export default tmp4;
