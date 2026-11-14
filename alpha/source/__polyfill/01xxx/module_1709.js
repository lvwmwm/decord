// Module ID: 1709
// Function ID: 1710
// Dependencies: [1710, 1711, 1719, 1736, 1717, 1718, 1724, 1725, 1726, 1735, 1737, 1738, 1712, 1730, 1749, 1750, 1733, 1734]
// Exports: getMemorySafeCapturableConsole, init

// Module 1709
import RuntimeKind from "RuntimeKind" /* 1710 */;
import threadsNative from "threadsNative" /* 1711 */;
import installValueUnpacker from "installValueUnpacker" /* 1717 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1719 */;
import bundleValueUnpacker from "bundleValueUnpacker" /* 1736 */;

let _require, fromEntriesResult;

let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
const f85251 = (item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  function methodWrapper() {
    return closure_1_0(...HermesBuiltin.copyRestArgs());
  }
  if (tmp2.name) {
    const _Object = Object;
    const obj = { value: tmp2.name, writable: false };
    Object.defineProperty(methodWrapper, "name", obj);
  }
  const items = [tmp, methodWrapper];
  return items;
};
if (undefined === globalThis.__RUNTIME_KIND) {
  let _globalThis = globalThis;
  globalThis.__RUNTIME_KIND = RuntimeKind.RuntimeKind.ReactNative;
}
let items = [{ code: "(function setupConsole_Pnpm_initializersNativeTs1(boundCapturableConsole){let[scheduleOnRN]=this.__closure;globalThis.console={assert:function(...args){return scheduleOnRN(boundCapturableConsole.assert,...args);},debug:function(...args){return scheduleOnRN(boundCapturableConsole.debug,...args);},log:function(...args){return scheduleOnRN(boundCapturableConsole.log,...args);},warn:function(...args){return scheduleOnRN(boundCapturableConsole.warn,...args);},error:function(...args){return scheduleOnRN(boundCapturableConsole.error,...args);},info:function(...args){return scheduleOnRN(boundCapturableConsole.info,...args);}};})" }, threadsNative.scheduleOnRN];
[tmp2, tmp3] = items;
function setupConsole(arg0) {
  let closure_0 = arg0;
  globalThis.console = {
    assert() {
      return c0(...HermesBuiltin.copyRestArgs());
    },
    debug() {
      return c0(...HermesBuiltin.copyRestArgs());
    },
    log() {
      return c0(...HermesBuiltin.copyRestArgs());
    },
    warn() {
      return c0(...HermesBuiltin.copyRestArgs());
    },
    error() {
      return c0(...HermesBuiltin.copyRestArgs());
    },
    info() {
      return c0(...HermesBuiltin.copyRestArgs());
    }
  };
}
let items1 = [tmp3];
setupConsole.__closure = items1;
setupConsole.__workletHash = 11579803583940;
setupConsole.__initData = tmp2;
const items2 = [{ code: "(function setupConsoleForwarding_Pnpm_initializersNativeTs2(boundCapturableConsole){let[scheduleOnRN]=this.__closure;globalThis.nativeLoggingHook=function(message,level){switch(level){case 0:scheduleOnRN(boundCapturableConsole.debug,message);break;case 1:scheduleOnRN(boundCapturableConsole.log,message);break;case 2:scheduleOnRN(boundCapturableConsole.warn,message);break;case 3:scheduleOnRN(boundCapturableConsole.error,message);break;default:scheduleOnRN(boundCapturableConsole.log,message);}};})" }, threadsNative.scheduleOnRN];
[tmp4, tmp5] = items2;
function setupConsoleForwarding(arg0) {
  let closure_0 = arg0;
  globalThis.nativeLoggingHook = (arg0, arg1) => {
    if (0 === arg1) {
      c0(closure_0.debug, arg0);
    } else if (1 === arg1) {
      c0(closure_0.log, arg0);
    } else if (2 === arg1) {
      c0(closure_0.warn, arg0);
    } else if (3 === arg1) {
      c0(closure_0.error, arg0);
    }
  };
}
const items3 = [tmp5];
setupConsoleForwarding.__closure = items3;
setupConsoleForwarding.__workletHash = 3153483615840;
setupConsoleForwarding.__initData = tmp4;
const items4 = [{ code: "(function setupSerializer_Pnpm_initializersNativeTs3(){let[makeShareableCloneOnUIRecursive]=this.__closure;globalThis.__serializer=makeShareableCloneOnUIRecursive;})" }, registerCustomSerializable.makeShareableCloneOnUIRecursive];
let c0;
[tmp6, tmp7] = items4;
function setupSerializer() {
  globalThis.__serializer = __serializer;
}
const items5 = [tmp7];
setupSerializer.__closure = items5;
setupSerializer.__workletHash = 7733519674106;
setupSerializer.__initData = tmp6;
let c6 = false;
let closure_7 = { code: "(function pnpm_initializersNativeTs5(){let[setupConsole,runtimeBoundCapturableConsole,__DEV__,setupConsoleForwarding,setupQueueMicrotask,setupRequestAnimationFrame,setupSetTimeout,setupSetImmediate,setupSetInterval,setupSerializer]=this.__closure;if(!globalThis._WORKLETS_BUNDLE_MODE_ENABLED){setupConsole(runtimeBoundCapturableConsole);}else if(__DEV__){setupConsoleForwarding(runtimeBoundCapturableConsole);}setupQueueMicrotask();setupRequestAnimationFrame();setupSetTimeout();setupSetImmediate();setupSetInterval();setupSerializer();})" };

export function getMemorySafeCapturableConsole() {
  if (fromEntriesResult) {
    return fromEntriesResult;
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const _console = console;
    const entries = Object.entries(console);
    fromEntriesResult = fromEntries(entries.map(f85251));
    return fromEntriesResult;
  }
}
export { setupConsole };
export { setupConsoleForwarding };
export { setupSerializer };
export function init() {
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  const tmp = c6;
  if (!tmp) {
    let tmp3;
    c6 = true;
    const tmp2 = globalThis;
    const _globalThis = globalThis;
    if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
      const _globalThis2 = globalThis;
      globalThis.__valueUnpacker = bundleValueUnpacker.bundleValueUnpacker;
      let tmp4 = dependencyMap;
      tmp3 = require;
    } else {
      tmp3 = require;
      tmp4 = dependencyMap;
      let obj = installValueUnpacker;
      obj.installValueUnpacker();
    }
    const tmp3Result = tmp3(1718);
    const result = tmp3Result.installSynchronizableUnpacker();
    const tmp3Result8 = tmp3(1724);
    const result1 = tmp3Result8.installCustomSerializableUnpacker();
    const tmp3Result9 = tmp3(1725);
    const result2 = tmp3Result9.installShareableHostUnpacker();
    const tmp3Result10 = tmp3(1726);
    const result3 = tmp3Result10.installShareableGuestUnpacker();
    const tmp3Result11 = tmp3(1735);
    const result4 = tmp3Result11.installRemoteFunctionUnpacker();
    const _globalThis3 = globalThis;
    if (globalThis.__RUNTIME_KIND !== tmp3(1710).RuntimeKind.ReactNative) {
      const _globalThis6 = globalThis;
      if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
        const tmp3Result12 = tmp3(1738);
        tmp3Result12.installNetworking();
      }
    } else {
      const tmp3Result13 = tmp3(1737);
      const result5 = tmp3Result13.registerReportFatalRemoteError();
      if (typeof setupSerializer === "function") {
        const _globalThis4 = globalThis;
        globalThis.__serializer = _require;
        if (tmp3(1712).WorkletsModule) {
          const _globalThis5 = globalThis;
          let tmp16 = null;
          if (!globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
            let tmp17 = fromEntriesResult;
            if (!tmp17) {
              let _Object = Object;
              const _Object2 = Object;
              const _console = console;
              const entries = Object.entries(console);
              fromEntriesResult = fromEntries(entries.map(f85251));
              tmp17 = fromEntriesResult;
            }
            tmp16 = tmp17;
          }
          let items = [closure_7, setupConsole, tmp16, false, setupConsoleForwarding, , , , , , ];
          const runOnUISync = tmp3(1711).runOnUISync;
          tmp3(1711);
          items[5] = tmp3(1730).setupQueueMicrotask;
          items[6] = tmp3(1749).setupRequestAnimationFrame;
          items[7] = tmp3(1750).setupSetTimeout;
          items[8] = tmp3(1733).setupSetImmediate;
          items[9] = tmp3(1734).setupSetInterval;
          items[10] = tmp38;
          _require = undefined;
          let c1;
          let c2;
          let c3;
          let c4;
          let c5;
          c6 = undefined;
          let c7;
          let c8;
          let c9;
          [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items;
          function pnpm_initializersNativeTs5() {
            if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
              const tmp4 = c2;
              if (tmp4) {
                _undefined2(c1);
              }
            } else {
              _undefined(c1);
            }
            _undefined3();
            _undefined4();
            _undefined5();
            _undefined6();
            _undefined7();
            _undefined8();
          }
          const items1 = [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
          pnpm_initializersNativeTs5.__closure = items1;
          pnpm_initializersNativeTs5.__workletHash = 12068601897535;
          pnpm_initializersNativeTs5.__initData = tmp24;
          runOnUISync(pnpm_initializersNativeTs5);
        } else {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("[Worklets] Worklets are trying to initialize the UI runtime without a valid WorkletsModule");
          throw error;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
}
