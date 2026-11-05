// Module ID: 1709
// Function ID: 1710
// Name: WorkletsModule
// Dependencies: [41, 42, 90, 91, 1710, 1711, 1707, 1712, 1714, 1715, 1721, 1722, 1723, 1732]

// Module 1709 (WorkletsModule)
import RuntimeKind from "RuntimeKind" /* 1707 */;
import bundleModeNative from "bundleModeNative" /* 1710 */;
import _mod1711 from "module_1711" /* 1711 */;
import WorkletsTurboModule3 from "WorkletsTurboModule" /* 1712 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _classPrivateFieldBase from "_classPrivateFieldBase" /* 90 */;
import _classPrivateFieldKey from "_classPrivateFieldKey" /* 91 */;

let closure_4 = _classPrivateFieldKey("workletsModuleProxy");
let closure_5 = _classPrivateFieldKey("serializableUndefined");
let closure_6 = _classPrivateFieldKey("serializableNull");
let closure_7 = _classPrivateFieldKey("serializableTrue");
let closure_8 = _classPrivateFieldKey("serializableFalse");
class NativeWorklets {
  constructor() {
    let _location;
    let _location2;
    let _location3;
    let _location4;
    let _location5;
    let _location6;
    let code;
    let code2;
    let code3;
    let code4;
    let code5;
    let code6;
    const self = this;
    _classCallCheck(this, NativeWorklets);
    Object.defineProperty(this, closure_4, { writable: true, value: "Boolean" });
    Object.defineProperty(this, closure_5, { writable: true, value: "Boolean" });
    Object.defineProperty(this, closure_6, { writable: true, value: "Boolean" });
    Object.defineProperty(this, closure_7, { writable: true, value: "Boolean" });
    Object.defineProperty(this, closure_8, { writable: true, value: "Boolean" });
    const obj = bundleModeNative;
    const isBundleModeEnabledResult = obj.isBundleModeEnabled();
    globalThis._WORKLETS_VERSION_JS = _mod1711.jsVersion;
    const obj2 = RuntimeKind;
    const tmp15 = undefined === globalThis.__workletsModuleProxy && obj2.isRNRuntime();
    if (tmp15) {
      const WorkletsTurboModule = tmp12(1712).WorkletsTurboModule;
      if (WorkletsTurboModule != null) {
        WorkletsTurboModule.installTurboModule(isBundleModeEnabledResult);
      }
      if (!isBundleModeEnabledResult) {
        const _globalThis = globalThis;
        const __initData = tmp12(1714).installValueUnpacker.__initData;
        const __initData2 = tmp12(1715).installSynchronizableUnpacker.__initData;
        const __initData3 = tmp12(1721).installCustomSerializableUnpacker.__initData;
        const __initData4 = tmp12(1722).installShareableHostUnpacker.__initData;
        const __initData5 = tmp12(1723).installShareableGuestUnpacker.__initData;
        const __initData6 = tmp12(1732).installRemoteFunctionUnpacker.__initData;
        if (undefined !== __initData.bytecode) {
          const unpackersWithBytecode = __workletsModuleProxy.loadUnpackersWithBytecode(__initData.bytecode, __initData2.bytecode, __initData3.bytecode, __initData4.bytecode, __initData5.bytecode, __initData6.bytecode);
        } else {
          ({ code: code6, location: _location } = __initData);
          const loadUnpackersWithCode = __workletsModuleProxy.loadUnpackersWithCode;
          if (_location == null) {
            _location = "";
          }
          let str = __initData.sourceMap;
          if (str == null) {
            str = "";
          }
          ({ code, location: _location2 } = __initData2);
          if (_location2 == null) {
            _location2 = "";
          }
          let str2 = __initData2.sourceMap;
          if (str2 == null) {
            str2 = "";
          }
          ({ code: code2, location: _location3 } = __initData3);
          if (_location3 == null) {
            _location3 = "";
          }
          let str3 = __initData3.sourceMap;
          if (str3 == null) {
            str3 = "";
          }
          ({ code: code3, location: _location4 } = __initData4);
          if (_location4 == null) {
            _location4 = "";
          }
          let str4 = __initData4.sourceMap;
          if (str4 == null) {
            str4 = "";
          }
          ({ code: code4, location: _location5 } = __initData5);
          if (_location5 == null) {
            _location5 = "";
          }
          let str5 = __initData5.sourceMap;
          if (str5 == null) {
            str5 = "";
          }
          ({ code: code5, location: _location6 } = __initData6);
          if (_location6 == null) {
            _location6 = "";
          }
          let str6 = __initData6.sourceMap;
          if (str6 == null) {
            str6 = "";
          }
          const unpackersWithCode = loadUnpackersWithCode(code6, _location, str, code, _location2, str2, code2, _location3, str3, code3, _location4, str4, code4, _location5, str5, code5, _location6, str6, false);
        }
      }
      const WorkletsTurboModule2 = tmp12(1712).WorkletsTurboModule;
      if (WorkletsTurboModule2 != null) {
        WorkletsTurboModule2.start();
      }
    }
    if (undefined === globalThis.__workletsModuleProxy) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("[Worklets] Native part of Worklets doesn't seem to be initialized.\nSee https://docs.swmansion.com/react-native-worklets/docs/guides/troubleshooting#native-part-of-worklets-doesnt-seem-to-be-initialized for more details.");
      throw error;
    } else {
      const _globalThis2 = globalThis;
      _classPrivateFieldBase(self, closure_4)[closure_4] = globalThis.__workletsModuleProxy;
      const tmp44 = _classPrivateFieldBase(self, closure_6);
      const obj3 = _classPrivateFieldBase(self, closure_4)[closure_4];
      tmp44[closure_6] = obj3.createSerializableNull();
      const tmp45 = _classPrivateFieldBase(self, closure_5);
      const obj4 = _classPrivateFieldBase(self, closure_4)[closure_4];
      tmp45[closure_5] = obj4.createSerializableUndefined();
      const tmp46 = _classPrivateFieldBase(self, closure_7);
      const obj5 = _classPrivateFieldBase(self, closure_4)[closure_4];
      tmp46[closure_7] = obj5.createSerializableBoolean(true);
      const tmp47 = _classPrivateFieldBase(self, closure_8);
      const obj6 = _classPrivateFieldBase(self, closure_4)[closure_4];
      tmp47[closure_8] = obj6.createSerializableBoolean(false);
    }
  }
}
const entry = {
  key: "createSerializableImport",
  value: function createSerializableImport(source, imported) {
    const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
    return obj.createSerializableImport(source, imported);
  }
};
const items = [
  entry,
  {
    key: "createSerializableString",
    value: function createSerializableString(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableString(arg0);
    }
  },
  {
    key: "createSerializableNumber",
    value: function createSerializableNumber(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableNumber(arg0);
    }
  },
  {
    key: "createSerializableBoolean",
    value: function createSerializableBoolean(arg0) {
      let tmp4;
      const self = this;
      const tmp2 = arg0;
      if (tmp2) {
        tmp4 = tmp(self, closure_7)[closure_7];
      } else {
        tmp4 = tmp(self, closure_8)[closure_8];
      }
      return tmp4;
    }
  },
  {
    key: "createSerializableBigInt",
    value: function createSerializableBigInt(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableBigInt(arg0);
    }
  },
  {
    key: "createSerializableUndefined",
    value: function createSerializableUndefined() {
      return _classPrivateFieldBase(this, closure_5)[closure_5];
    }
  },
  {
    key: "createSerializableNull",
    value: function createSerializableNull() {
      return _classPrivateFieldBase(this, closure_6)[closure_6];
    }
  },
  {
    key: "createSerializableTurboModuleLike",
    value: function createSerializableTurboModuleLike(arg0, prototypeOf1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableTurboModuleLike(arg0, prototypeOf1);
    }
  },
  {
    key: "createSerializableObject",
    value: function createSerializableObject(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableObject(arg0, arg1, arg2);
    }
  },
  {
    key: "createSerializableHostObject",
    value: function createSerializableHostObject(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableHostObject(arg0);
    }
  },
  {
    key: "createSerializableArray",
    value: function createSerializableArray(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableArray(arg0, flag);
    }
  },
  {
    key: "createSerializableArrayBuffer",
    value: function createSerializableArrayBuffer(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableArrayBuffer(arg0);
    }
  },
  {
    key: "createSerializableMap",
    value: function createSerializableMap(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableMap(arg0, arg1);
    }
  },
  {
    key: "createSerializableSet",
    value: function createSerializableSet(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableSet(arg0);
    }
  },
  {
    key: "createSerializableError",
    value: function createSerializableError(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableError(arg0, arg1, arg2);
    }
  },
  {
    key: "createSerializableRegExp",
    value: function createSerializableRegExp(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableRegExp(arg0, arg1);
    }
  },
  {
    key: "createSerializableArrayBufferView",
    value: function createSerializableArrayBufferView(arg0, arg1, arg2, arg3) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableArrayBufferView(arg0, arg1, arg2, arg3);
    }
  },
  {
    key: "createSerializableNonWorkletFunction",
    value: function createSerializableNonWorkletFunction(__initData, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableNonWorkletFunction(__initData, arg1);
    }
  },
  {
    key: "createSerializableWorklet",
    value: function createSerializableWorklet(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSerializableWorklet(arg0, arg1);
    }
  },
  {
    key: "createCustomSerializable",
    value: function createCustomSerializable(serializable, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createCustomSerializable(serializable, arg1);
    }
  },
  {
    key: "registerCustomSerializable",
    value: function registerCustomSerializable(arg0, arg1, arg2, arg3) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      const result = obj.registerCustomSerializable(arg0, arg1, arg2, arg3);
    }
  },
  {
    key: "createShareable",
    value: function createShareable(arg0, arg1, arg2, arg3, arg4) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createShareable(arg0, arg1, arg2, arg3, arg4);
    }
  },
  {
    key: "scheduleOnRN",
    value: function scheduleOnRN(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      obj.scheduleOnRN(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnRNSync",
    value: function runOnRNSync(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.runOnRNSync(arg0, arg1, arg2);
    }
  },
  {
    key: "scheduleOnUI",
    value: function scheduleOnUI(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.scheduleOnUI(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnUISync",
    value: function runOnUISync(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.runOnUISync(arg0, arg1);
    }
  },
  {
    key: "createWorkletRuntime",
    value: function createWorkletRuntime(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createWorkletRuntime(arg0, arg1, arg2, arg3, arg4, arg5, arg6);
    }
  },
  {
    key: "scheduleOnRuntime",
    value: function scheduleOnRuntime(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.scheduleOnRuntime(arg0, arg1, arg2);
    }
  },
  {
    key: "scheduleOnRuntimeWithId",
    value: function scheduleOnRuntimeWithId(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.scheduleOnRuntimeWithId(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnRuntimeSync",
    value: function runOnRuntimeSync(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.runOnRuntimeSync(arg0, arg1, arg2);
    }
  },
  {
    key: "runOnRuntimeSyncWithId",
    value: function runOnRuntimeSyncWithId(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.runOnRuntimeSyncWithId(arg0, arg1, arg2);
    }
  },
  {
    key: "handlePromise",
    value: function handlePromise(c2, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.handlePromise(c2, arg1);
    }
  },
  {
    key: "createSynchronizable",
    value: function createSynchronizable(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.createSynchronizable(arg0, arg1);
    }
  },
  {
    key: "synchronizableGetDirty",
    value: function synchronizableGetDirty(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.synchronizableGetDirty(arg0);
    }
  },
  {
    key: "synchronizableGetBlocking",
    value: function synchronizableGetBlocking(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.synchronizableGetBlocking(arg0);
    }
  },
  {
    key: "synchronizableSetBlocking",
    value: function synchronizableSetBlocking(arg0, fn) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.synchronizableSetBlocking(arg0, fn);
    }
  },
  {
    key: "synchronizableSetDirty",
    value: function synchronizableSetDirty(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.synchronizableSetDirty(arg0, arg1);
    }
  },
  {
    key: "synchronizableLock",
    value: function synchronizableLock(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.synchronizableLock(arg0);
    }
  },
  {
    key: "synchronizableUnlock",
    value: function synchronizableUnlock(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.synchronizableUnlock(arg0);
    }
  },
  {
    key: "reportFatalErrorOnJS",
    value: function reportFatalErrorOnJS(arg0, arg1, arg2) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.reportFatalErrorOnJS(arg0, arg1, arg2);
    }
  },
  {
    key: "getStaticFeatureFlag",
    value: function getStaticFeatureFlag(arg0) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.getStaticFeatureFlag(arg0);
    }
  },
  {
    key: "setDynamicFeatureFlag",
    value: function setDynamicFeatureFlag(arg0, arg1) {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      const result = obj.setDynamicFeatureFlag(arg0, arg1);
    }
  },
  {
    key: "getCurrentThreadId",
    value: function getCurrentThreadId() {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.getCurrentThreadId();
    }
  },
  {
    key: "getUIRuntimeHolder",
    value: function getUIRuntimeHolder() {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.getUIRuntimeHolder();
    }
  },
  {
    key: "getUISchedulerHolder",
    value: function getUISchedulerHolder() {
      const obj = _classPrivateFieldBase(this, closure_4)[closure_4];
      return obj.getUISchedulerHolder();
    }
  },
  {
    key: "toggleSlowAnimationsOnUIRuntime",
    value: function toggleSlowAnimationsOnUIRuntime() {
      const WorkletsTurboModule = WorkletsTurboModule3.WorkletsTurboModule;
      let flag;
      if (WorkletsTurboModule != null) {
        flag = WorkletsTurboModule.toggleSlowAnimationsOnUIRuntime();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    }
  }
];
let tmp4 = new _createClass(NativeWorklets, items)();

export const WorkletsModule = tmp4;
