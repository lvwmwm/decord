// Module ID: 1724
// Function ID: 1725
// Name: runtimesNative
// Dependencies: [1707, 1706, 1718, 1709, 1716, 1725, 1710, 1717]
// Exports: createWorkletRuntime, getUIRuntimeHolder, getUISchedulerHolder, runOnRuntime, runOnRuntimeAsync, runOnRuntimeAsyncWithId, runOnRuntimeSync, runOnRuntimeSyncWithId, scheduleOnRuntime, scheduleOnRuntimeWithId

// Module 1724 (runtimesNative)
import _mod1706 from "module_1706" /* 1706 */;
import RuntimeKind from "RuntimeKind" /* 1707 */;
import WorkletsModule2 from "WorkletsModule" /* 1709 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1716 */;
import serializableMappingFlag from "serializableMappingFlag" /* 1717 */;
import _mod1718 from "module_1718" /* 1718 */;
import setupRunLoop from "setupRunLoop" /* 1725 */;
import bundleModeNative_mod from "bundleModeNative" /* 1710 */;

let _undefined;

let tmp10;
let tmp11;
let tmp12;
let tmp14;
let tmp15;
let tmp16;
let tmp17;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp9;
function scheduleOnRuntime(arg0, arg1) {
  let tmp2;
  let tmp3;
  let tmp4;
  const substr = [...arguments].slice();
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  const scheduleOnRuntime = WorkletsModule.scheduleOnRuntime;
  const items = [closure_3, arg1, substr];
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_runtimesNativeTs2() {
    _undefined(...c1);
  }
  const items1 = [tmp3, tmp4];
  pnpm_runtimesNativeTs2.__closure = items1;
  pnpm_runtimesNativeTs2.__workletHash = 3026610563032;
  pnpm_runtimesNativeTs2.__initData = tmp2;
  const obj = registerCustomSerializable;
  scheduleOnRuntime(arg0, obj.createSerializable(pnpm_runtimesNativeTs2), undefined);
}
let closure_2 = { code: "(function pnpm_runtimesNativeTs1(){let[setupSerializer,setupConsole,runtimeBoundCapturableConsole,__DEV__,setupConsoleForwarding,enableEventLoop,setupRunLoop,animationQueuePollingRate,initializerFn]=this.__closure;var _initializerFn;setupSerializer();if(!globalThis._WORKLETS_BUNDLE_MODE_ENABLED){setupConsole(runtimeBoundCapturableConsole);}else if(__DEV__){setupConsoleForwarding(runtimeBoundCapturableConsole);}if(enableEventLoop){setupRunLoop(animationQueuePollingRate);}(_initializerFn=initializerFn)===null||_initializerFn===void 0||_initializerFn();})" };
let closure_3 = { code: "(function pnpm_runtimesNativeTs2(){let[worklet,args]=this.__closure;worklet(...args);})" };
const UI = RuntimeKind.RuntimeKind.UI;
let bundleModeNative = bundleModeNative_mod;
if (!bundleModeNative.isBundleModeEnabled()) {
  let items = [{ code: "(function scheduleOnRuntimeWorklet_Pnpm_runtimesNativeTs4(workletRuntime,worklet,...args){let[__DEV__,isWorkletFunction,_worklet_8456421177017_init_data]=this.__closure;if(__DEV__&&!isWorkletFunction(worklet)){throw new Error('[Worklets] The function passed to `scheduleOnRuntime` is not a worklet.');}globalThis.__workletsModuleProxy.scheduleOnRuntime(workletRuntime,globalThis.__serializer(function scheduleOnRuntimeWorklet_Pnpm_runtimesNativeTs4([_worklet_8456421177017_init_data,worklet,args]){const pnpm_runtimesNativeTs3=function(){worklet(...args);};pnpm_runtimesNativeTs3.__closure=[worklet,args];pnpm_runtimesNativeTs3.__workletHash=8456421177017;pnpm_runtimesNativeTs3.__initData=_worklet_8456421177017_init_data;return pnpm_runtimesNativeTs3;}([_worklet_8456421177017_init_data,worklet,args])));})" }, , , ];
  let flag = false;
  items[1] = false;
  items[2] = _mod1718.isWorkletFunction;
  items[3] = { code: "(function pnpm_runtimesNativeTs3(){let[worklet,args]=this.__closure;worklet(...args);})" };
  let c0;
  let c1;
  let c2;
  const tmp2 = items;
  [tmp3, tmp4, tmp5, tmp6] = items;
  function scheduleOnRuntimeWorklet(arg0, arg1) {
    let tmp6;
    let tmp7;
    let tmp8;
    const substr = [...arguments].slice();
    if (c0) {
      if (!_undefined(arg1)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("[Worklets] The function passed to `scheduleOnRuntime` is not a worklet.");
        throw error;
      }
    }
    const items = [c2, arg1, substr];
    c0 = undefined;
    _undefined = undefined;
    [tmp6, tmp7, tmp8] = items;
    function pnpm_runtimesNativeTs3() {
      _undefined(...c1);
    }
    const items1 = [tmp7, tmp8];
    pnpm_runtimesNativeTs3.__closure = items1;
    pnpm_runtimesNativeTs3.__workletHash = 8456421177017;
    pnpm_runtimesNativeTs3.__initData = tmp6;
    __workletsModuleProxy.scheduleOnRuntime(arg0, globalThis.__serializer(pnpm_runtimesNativeTs3));
  }
  let items1 = [tmp4, tmp5, tmp6];
  scheduleOnRuntimeWorklet.__closure = items1;
  let num = 7724622788166;
  scheduleOnRuntimeWorklet.__workletHash = 7724622788166;
  scheduleOnRuntimeWorklet.__initData = tmp3;
  const serializableMappingCache = serializableMappingFlag.serializableMappingCache;
  const set = serializableMappingCache.set;
  const _module1 = registerCustomSerializable;
  let result = set(scheduleOnRuntime, _module1.createSerializable(scheduleOnRuntimeWorklet));
}
function scheduleOnRuntimeWithId(arg0, arg1) {
  let tmp2;
  let tmp3;
  let tmp4;
  const substr = [...arguments].slice();
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  const scheduleOnRuntimeWithId = WorkletsModule.scheduleOnRuntimeWithId;
  const items = [closure_4, arg1, substr];
  let c0;
  let c1;
  [tmp2, tmp3, tmp4] = items;
  function pnpm_runtimesNativeTs5() {
    _undefined(...c1);
  }
  const items1 = [tmp3, tmp4];
  pnpm_runtimesNativeTs5.__closure = items1;
  pnpm_runtimesNativeTs5.__workletHash = 5123516673535;
  pnpm_runtimesNativeTs5.__initData = tmp2;
  const obj = registerCustomSerializable;
  const result = scheduleOnRuntimeWithId(arg0, obj.createSerializable(pnpm_runtimesNativeTs5), undefined);
}
let closure_4 = { code: "(function pnpm_runtimesNativeTs5(){let[worklet,args]=this.__closure;worklet(...args);})" };
bundleModeNative = bundleModeNative_mod;
if (!bundleModeNative.isBundleModeEnabled()) {
  const items2 = [{ code: "(function scheduleOnRuntimeWithIdWorklet_Pnpm_runtimesNativeTs7(runtimeId,worklet,...args){let[__DEV__,isWorkletFunction,_worklet_8728884140124_init_data]=this.__closure;if(__DEV__&&!isWorkletFunction(worklet)){throw new Error('[Worklets] The function passed to `scheduleOnRuntimeWithId` is not a worklet.');}globalThis.__workletsModuleProxy.scheduleOnRuntimeWithId(runtimeId,globalThis.__serializer(function scheduleOnRuntimeWithIdWorklet_Pnpm_runtimesNativeTs7([_worklet_8728884140124_init_data,worklet,args]){const pnpm_runtimesNativeTs6=function(){worklet(...args);};pnpm_runtimesNativeTs6.__closure=[worklet,args];pnpm_runtimesNativeTs6.__workletHash=8728884140124;pnpm_runtimesNativeTs6.__initData=_worklet_8728884140124_init_data;return pnpm_runtimesNativeTs6;}([_worklet_8728884140124_init_data,worklet,args])));})" }, , , ];
  let flag2 = false;
  items2[1] = false;
  items2[2] = _mod1718.isWorkletFunction;
  items2[3] = { code: "(function pnpm_runtimesNativeTs6(){let[worklet,args]=this.__closure;worklet(...args);})" };
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  const tmp8 = items2;
  [tmp9, tmp10, tmp11, tmp12] = items2;
  function scheduleOnRuntimeWithIdWorklet(arg0, arg1) {
    let tmp6;
    let tmp7;
    let tmp8;
    const substr = [...arguments].slice();
    if (c0) {
      if (!_undefined(arg1)) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("[Worklets] The function passed to `scheduleOnRuntimeWithId` is not a worklet.");
        throw error;
      }
    }
    const items = [c2, arg1, substr];
    c0 = undefined;
    _undefined = undefined;
    [tmp6, tmp7, tmp8] = items;
    function pnpm_runtimesNativeTs6() {
      _undefined(...c1);
    }
    const items1 = [tmp7, tmp8];
    pnpm_runtimesNativeTs6.__closure = items1;
    pnpm_runtimesNativeTs6.__workletHash = 8728884140124;
    pnpm_runtimesNativeTs6.__initData = tmp6;
    const result = __workletsModuleProxy.scheduleOnRuntimeWithId(arg0, globalThis.__serializer(pnpm_runtimesNativeTs6));
  }
  const items3 = [tmp10, tmp11, tmp12];
  scheduleOnRuntimeWithIdWorklet.__closure = items3;
  scheduleOnRuntimeWithIdWorklet.__workletHash = 4266458889295;
  scheduleOnRuntimeWithIdWorklet.__initData = tmp9;
  const serializableMappingCache2 = serializableMappingFlag.serializableMappingCache;
  const set2 = serializableMappingCache2.set;
  const _module3 = registerCustomSerializable;
  set2(scheduleOnRuntimeWithId, _module3.createSerializable(scheduleOnRuntimeWithIdWorklet));
}
const items4 = [{ code: "(function runOnRuntime_Pnpm_runtimesNativeTs8(workletRuntime,worklet){let[__DEV__,isWorkletFunction,scheduleOnRuntime]=this.__closure;if(__DEV__&&!isWorkletFunction(worklet)){throw new Error('[Worklets] The function passed to `runOnRuntime` is not a worklet.');}return function(...args){return scheduleOnRuntime(workletRuntime,worklet,...args);};})" }, false, _mod1718.isWorkletFunction, scheduleOnRuntime];
c0 = undefined;
c1 = undefined;
c2 = undefined;
[tmp14, tmp15, tmp16, tmp17] = items4;
function runOnRuntime(arg0, arg1) {
  let closure_1;
  let closure_0 = arg0;
  _undefined = arg1;
  const tmp = closure_0;
  if (tmp) {
    if (!_undefined(arg1)) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("[Worklets] The function passed to `runOnRuntime` is not a worklet.");
      throw error;
    }
  }
  return () => c2(closure_1, ...HermesBuiltin.copyRestArgs());
}
const items5 = [tmp15, tmp16, tmp17];
runOnRuntime.__closure = items5;
runOnRuntime.__workletHash = 2466422353988;
runOnRuntime.__initData = tmp14;
let closure_5 = { code: "(function pnpm_runtimesNativeTs9(){let[worklet,args,makeShareableCloneOnUIRecursive]=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);})" };
let closure_6 = { code: "(function pnpm_runtimesNativeTs10(){let[worklet,args,makeShareableCloneOnUIRecursive]=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);})" };
let closure_7 = { code: "(function pnpm_runtimesNativeTs11(){let[worklet,args,resolve,reject]=this.__closure;try{const result=worklet(...args);const serializedResult=globalThis.__serializer(result);globalThis.__workletsModuleProxy.handlePromise(resolve,serializedResult);}catch(error){const serializedError=globalThis.__serializer(error);globalThis.__workletsModuleProxy.handlePromise(reject,serializedError);}})" };
let closure_8 = { code: "(function pnpm_runtimesNativeTs12(){let[worklet,args,resolve,reject]=this.__closure;try{const result=worklet(...args);const serializedResult=globalThis.__serializer(result);globalThis.__workletsModuleProxy.handlePromise(resolve,serializedResult);}catch(error){const serializedError=globalThis.__serializer(error);globalThis.__workletsModuleProxy.handlePromise(reject,serializedError);}})" };

export const UIRuntimeId = UI;
export function createWorkletRuntime(name, initializer) {
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let memorySafeCapturableConsole = null;
  if (!globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
    const obj = _mod1706;
    memorySafeCapturableConsole = obj.getMemorySafeCapturableConsole();
  }
  let tmp4 = initializer;
  let flag = true;
  let flag2 = true;
  let flag3 = true;
  let str = "default";
  let tmp5;
  let tmp6 = name;
  if (typeof name !== "string") {
    let str3;
    let str2;
    if (name != null) {
      str2 = name.name;
    }
    if (str2 == null) {
      str2 = "anonymous";
    }
    initializer = undefined;
    if (name != null) {
      initializer = name.initializer;
    }
    let queue;
    if (name != null) {
      queue = name.queue;
    }
    if (undefined !== queue) {
      str3 = name.queue;
    } else {
      let useDefaultQueue;
      if (name != null) {
        useDefaultQueue = name.useDefaultQueue;
      }
      str3 = "default";
      if (false === useDefaultQueue) {
        let customQueue = name.customQueue;
        if (customQueue == null) {
          customQueue = null;
        }
        str3 = customQueue;
      }
    }
    let num;
    const _Math = Math;
    if (name != null) {
      num = name.animationQueuePollingRate;
    }
    if (num == null) {
      num = 16;
    }
    let flag5;
    const roundResult = round(num);
    if (name != null) {
      flag5 = name.enableLocking;
    }
    if (flag5 == null) {
      flag5 = true;
    }
    let tmp12 = flag5;
    if (tmp12) {
      let flag6;
      if (name != null) {
        flag6 = name.enableEventLoop;
      }
      if (flag6 == null) {
        flag6 = true;
      }
      tmp12 = flag6;
    }
    let flag7;
    if (name != null) {
      flag7 = name.enableNetworking;
    }
    if (flag7 == null) {
      flag7 = true;
    }
    if (flag7) {
      flag7 = tmp12;
    }
    flag = flag7;
    flag2 = flag5;
    flag3 = tmp12;
    str = str3;
    tmp5 = roundResult;
    tmp4 = initializer;
    tmp6 = str2;
  }
  let tmp13;
  if (typeof str === "object") {
    if (null !== str) {
      tmp13 = str;
    }
  }
  if (tmp4) {
    const obj2 = _mod1718;
    if (!obj2.isWorkletFunction(tmp4)) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("[Worklets] The initializer passed to `createWorkletRuntime` is not a worklet.");
      throw error;
    }
  }
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  const createWorkletRuntime = WorkletsModule.createWorkletRuntime;
  const items = [closure_2, , , , , , , , , ];
  const createSerializable = registerCustomSerializable.createSerializable;
  registerCustomSerializable;
  items[1] = _mod1706.setupSerializer;
  items[2] = _mod1706.setupConsole;
  items[3] = memorySafeCapturableConsole;
  items[4] = false;
  items[5] = _mod1706.setupConsoleForwarding;
  items[6] = flag3;
  items[7] = setupRunLoop.setupRunLoop;
  items[8] = tmp5;
  items[9] = tmp4;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  [tmp19, tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28] = items;
  function pnpm_runtimesNativeTs1() {
    _undefined();
    if (globalThis._WORKLETS_BUNDLE_MODE_ENABLED) {
      const tmp5 = c3;
      if (tmp5) {
        _undefined3(c2);
      }
    } else {
      _undefined2(c2);
    }
    const tmp9 = c5;
    if (tmp9) {
      _undefined4(c7);
    }
    if (_undefined5 != null) {
      _undefined5();
    }
  }
  const items1 = [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28];
  pnpm_runtimesNativeTs1.__closure = items1;
  pnpm_runtimesNativeTs1.__workletHash = 13388701192158;
  pnpm_runtimesNativeTs1.__initData = tmp19;
  const tmp29 = "default" === str;
  return createWorkletRuntime(tmp6, createSerializable(pnpm_runtimesNativeTs1), tmp29, tmp13, flag3, flag2, flag);
}
export { scheduleOnRuntime };
export { scheduleOnRuntimeWithId };
export { runOnRuntime };
export function runOnRuntimeSync(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const substr = [...arguments].slice();
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  const runOnRuntimeSync = WorkletsModule.runOnRuntimeSync;
  const items = [closure_5, arg1, substr, ];
  const createSerializable = registerCustomSerializable.createSerializable;
  registerCustomSerializable;
  items[3] = registerCustomSerializable.makeShareableCloneOnUIRecursive;
  let c0;
  let c1;
  let c2;
  [tmp3, tmp4, tmp5, tmp6] = items;
  function pnpm_runtimesNativeTs9() {
    return _undefined3(_undefined(...c1));
  }
  const items1 = [tmp4, tmp5, tmp6];
  pnpm_runtimesNativeTs9.__closure = items1;
  pnpm_runtimesNativeTs9.__workletHash = 67263326839;
  pnpm_runtimesNativeTs9.__initData = tmp3;
  return runOnRuntimeSync(arg0, createSerializable(pnpm_runtimesNativeTs9), undefined);
}
export function runOnRuntimeSyncWithId(arg0, arg1) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const substr = [...arguments].slice();
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  const runOnRuntimeSyncWithId = WorkletsModule.runOnRuntimeSyncWithId;
  const items = [closure_6, arg1, substr, ];
  const createSerializable = registerCustomSerializable.createSerializable;
  registerCustomSerializable;
  items[3] = registerCustomSerializable.makeShareableCloneOnUIRecursive;
  let c0;
  let c1;
  let c2;
  [tmp3, tmp4, tmp5, tmp6] = items;
  function pnpm_runtimesNativeTs10() {
    return _undefined3(_undefined(...c1));
  }
  const items1 = [tmp4, tmp5, tmp6];
  pnpm_runtimesNativeTs10.__closure = items1;
  pnpm_runtimesNativeTs10.__workletHash = 11936305249071;
  pnpm_runtimesNativeTs10.__initData = tmp3;
  return runOnRuntimeSyncWithId(arg0, createSerializable(pnpm_runtimesNativeTs10), undefined);
}
export function runOnRuntimeAsync(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  closure_2 = [...arguments].slice();
  const promise = new Promise((arg0, arg1) => {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    const WorkletsModule = WorkletsModule2.WorkletsModule;
    const scheduleOnRuntime = WorkletsModule.scheduleOnRuntime;
    let items = [closure_7, closure_1, closure_2, arg0, arg1];
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    function pnpm_runtimesNativeTs11() {
      try {
        const items = [];
        HermesBuiltin.arraySpread(items, c1, 0);
        const _globalThis = globalThis;
        const _globalThis2 = globalThis;
        __workletsModuleProxy.handlePromise(c2, globalThis.__serializer(HermesBuiltin.apply(c0, items, undefined)));
      } catch (tmp11) {
        const _globalThis3 = globalThis;
        const _globalThis4 = globalThis;
        const __workletsModuleProxy2 = globalThis.__workletsModuleProxy;
        __workletsModuleProxy2.handlePromise(c3, globalThis.__serializer(tmp11));
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6];
    pnpm_runtimesNativeTs11.__closure = items1;
    pnpm_runtimesNativeTs11.__workletHash = 6793061708881;
    pnpm_runtimesNativeTs11.__initData = tmp2;
    const obj = registerCustomSerializable;
    scheduleOnRuntime(closure_0, obj.createSerializable(pnpm_runtimesNativeTs11), undefined);
  });
  return promise;
}
export function runOnRuntimeAsyncWithId(arg0, pnpm_shareableGuestUnpackerNativeTs3) {
  let closure_0 = arg0;
  let closure_1 = pnpm_shareableGuestUnpackerNativeTs3;
  closure_2 = [...arguments].slice();
  const promise = new Promise((arg0, arg1) => {
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    const WorkletsModule = WorkletsModule2.WorkletsModule;
    const scheduleOnRuntimeWithId = WorkletsModule.scheduleOnRuntimeWithId;
    let items = [closure_8, pnpm_shareableGuestUnpackerNativeTs3, closure_2, arg0, arg1];
    let c0;
    let c1;
    let c2;
    let c3;
    [tmp2, tmp3, tmp4, tmp5, tmp6] = items;
    function pnpm_runtimesNativeTs12() {
      try {
        const items = [];
        HermesBuiltin.arraySpread(items, c1, 0);
        const _globalThis = globalThis;
        const _globalThis2 = globalThis;
        __workletsModuleProxy.handlePromise(c2, globalThis.__serializer(HermesBuiltin.apply(c0, items, undefined)));
      } catch (tmp11) {
        const _globalThis3 = globalThis;
        const _globalThis4 = globalThis;
        const __workletsModuleProxy2 = globalThis.__workletsModuleProxy;
        __workletsModuleProxy2.handlePromise(c3, globalThis.__serializer(tmp11));
      }
    }
    const items1 = [tmp3, tmp4, tmp5, tmp6];
    pnpm_runtimesNativeTs12.__closure = items1;
    pnpm_runtimesNativeTs12.__workletHash = 12177515103762;
    pnpm_runtimesNativeTs12.__initData = tmp2;
    const obj = registerCustomSerializable;
    const result = scheduleOnRuntimeWithId(closure_0, obj.createSerializable(pnpm_runtimesNativeTs12), undefined);
  });
  return promise;
}
export function getUIRuntimeHolder() {
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  return WorkletsModule.getUIRuntimeHolder();
}
export function getUISchedulerHolder() {
  const WorkletsModule = WorkletsModule2.WorkletsModule;
  return WorkletsModule.getUISchedulerHolder();
}
