// Module ID: 1708
// Function ID: 1709
// Name: threadsNative
// Dependencies: [32, 1709, 1716, 1707, 1718]
// Exports: executeOnUIRuntimeSync, getCurrentThreadId, runOnJS, runOnRNSync, runOnUI, runOnUIAsync

// Module 1708 (threadsNative)
import RuntimeKind from "RuntimeKind" /* 1707 */;
import WorkletsModule4 from "WorkletsModule" /* 1709 */;
import registerCustomSerializable from "registerCustomSerializable" /* 1716 */;
import _mod1718 from "module_1718" /* 1718 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

let closure_2;

let tmp10;
let tmp2;
let tmp3;
let tmp4;
let tmp5;
let tmp6;
let tmp7;
let tmp8;
let tmp9;
const f124754 = () => {
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  closure_4 = [];
  const items = [];
  const items1 = [];
  const tmp2 = closure_4[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = closure_1_3(tmp3, 4);
    [tmp6, tmp7, tmp8, tmp10] = tmp5;
    if (undefined === tmp8) {
      let push2 = items.push;
      let obj3 = closure_1_0(closure_1_1[2]);
      let push2Result = push2(obj3.createSerializable(tmp6));
      let push3 = items1.push;
      let obj4 = closure_1_0(closure_1_1[2]);
      let push3Result = push3(obj4.createSerializable(tmp7));
    } else {
      if (closure_2 == null) {
        let obj = closure_1_0(closure_1_1[2]);
        closure_2 = obj.createSerializable(closure_1_5);
      }
      let arr = items.push(closure_2);
      let push = items1.push;
      let obj2 = closure_1_0(closure_1_1[2]);
      let items2 = [tmp6, , , ];
      items2[1] = tmp7;
      items2[2] = tmp9;
      items2[3] = tmp10;
      let arr2 = push(obj2.createSerializable(items2));
    }
    continue;
  }
  const WorkletsModule = closure_1_0(closure_1_1[1]).WorkletsModule;
  scheduleOnUI = WorkletsModule.scheduleOnUI;
  const WorkletsModule2 = closure_1_0(closure_1_1[1]).WorkletsModule;
  const serializableArray = WorkletsModule2.createSerializableArray(items);
  const WorkletsModule3 = closure_1_0(closure_1_1[1]).WorkletsModule;
  scheduleOnUI(serializableArray, WorkletsModule3.createSerializableArray(items1), undefined);
};
function scheduleOnUI(arg0) {
  const items = [arg0, [...arguments].slice(), undefined, undefined, undefined];
  closure_4.push(items);
  if (1 === closure_4.length) {
    const _queueMicrotask = queueMicrotask;
    queueMicrotask(f124754);
  }
}
function runOnUISync(arg0) {
  let tmp3;
  let tmp4;
  let tmp5;
  let tmp6;
  const substr = [...arguments].slice();
  const WorkletsModule = WorkletsModule4.WorkletsModule;
  runOnUISync = WorkletsModule.runOnUISync;
  const items = [closure_7, arg0, substr, ];
  const createSerializable = registerCustomSerializable.createSerializable;
  registerCustomSerializable;
  items[3] = registerCustomSerializable.makeShareableCloneOnUIRecursive;
  let c0;
  let c1;
  let c2;
  [tmp3, tmp4, tmp5, tmp6] = items;
  function pnpm_threadsNativeTs2() {
    return _undefined3(_undefined(...c1));
  }
  const items1 = [tmp4, tmp5, tmp6];
  pnpm_threadsNativeTs2.__closure = items1;
  pnpm_threadsNativeTs2.__workletHash = 2333067153550;
  pnpm_threadsNativeTs2.__initData = tmp3;
  return runOnUISync(createSerializable(pnpm_threadsNativeTs2), undefined);
}
let closure_4 = [];
let items = [{ code: "(function runAsyncUIJob_Pnpm_threadsNativeTs1(workletFunction,workletArgs,resolve,reject){try{const result=workletFunction(...workletArgs);const serializedResult=globalThis.__serializer(result);globalThis.__workletsModuleProxy.handlePromise(resolve,serializedResult);}catch(error){const serializedError=globalThis.__serializer(error);globalThis.__workletsModuleProxy.handlePromise(reject,serializedError);}})" }];
[tmp2] = items;
function runAsyncUIJob(arg0, arg1, c2, c22) {
  try {
    const items = [];
    HermesBuiltin.arraySpread(items, arg1, 0);
    const _globalThis = globalThis;
    const _globalThis2 = globalThis;
    __workletsModuleProxy.handlePromise(c2, globalThis.__serializer(HermesBuiltin.apply(arg0, items, undefined)));
  } catch (tmp11) {
    const _globalThis3 = globalThis;
    const _globalThis4 = globalThis;
    const __workletsModuleProxy2 = globalThis.__workletsModuleProxy;
    __workletsModuleProxy2.handlePromise(c2, globalThis.__serializer(tmp11));
  }
}
runAsyncUIJob.__workletHash = 11899598733373;
runAsyncUIJob.__initData = tmp2;
let closure_7 = { code: "(function pnpm_threadsNativeTs2(){let[worklet,args,makeShareableCloneOnUIRecursive]=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);})" };
let items1 = [
  { code: "(function scheduleOnRN_Pnpm_threadsNativeTs3(fun,...args){const scheduleOnRN_Pnpm_threadsNativeTs3=this._recur;let[RuntimeKind,isWorkletFunction,runWorkletOnJS,SHOULD_CAPTURE_SCHEDULE_STACK]=this.__closure;if(globalThis.__RUNTIME_KIND===RuntimeKind.ReactNative){queueMicrotask(args.length?function(){return fun(...args);}:fun);}else if(isWorkletFunction(fun)){scheduleOnRN_Pnpm_threadsNativeTs3(runWorkletOnJS,fun,...args);}else{globalThis.__workletsModuleProxy.scheduleOnRN(fun,args.length>0?globalThis.__serializer(args):undefined,SHOULD_CAPTURE_SCHEDULE_STACK?new Error().stack:undefined);}})" },
  RuntimeKind.RuntimeKind,
  _mod1718.isWorkletFunction,
  function runWorkletOnJS(fn) {
    fn(...HermesBuiltin.copyRestArgs());
  },
  false
];
let c1;
let c2;
let c3;
[tmp3, tmp4, tmp5, tmp6, tmp7] = items1;
function scheduleOnRN(arg0) {
  let fn = arg0;
  let closure_0 = arg0;
  const substr = [...arguments].slice();
  if (globalThis.__RUNTIME_KIND === _undefined.ReactNative) {
    const _queueMicrotask = queueMicrotask;
    if (substr.length) {
      fn = () => closure_0(...substr);
    }
    _queueMicrotask(fn);
  } else if (_undefined2(fn)) {
    const items = [c2, fn];
    HermesBuiltin.arraySpread(items, substr, 2);
    HermesBuiltin.apply(scheduleOnRN, items, undefined);
  } else {
    const _globalThis = globalThis;
    let __serializerResult;
    scheduleOnRN = __workletsModuleProxy.scheduleOnRN;
    if (substr.length > 0) {
      const _globalThis2 = globalThis;
      __serializerResult = globalThis.__serializer(substr);
    }
    let stack;
    if (c3) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error();
      stack = error.stack;
    }
    scheduleOnRN(fn, __serializerResult, stack);
  }
}
let items2 = [tmp4, tmp5, tmp6, tmp7];
scheduleOnRN.__closure = items2;
scheduleOnRN.__workletHash = 12664382057292;
scheduleOnRN.__initData = tmp3;
const items3 = [{ code: "(function runOnJS_Pnpm_threadsNativeTs4(fun){let[scheduleOnRN]=this.__closure;return function(...args){scheduleOnRN(fun,...args);};})" }, scheduleOnRN];
let c0;
[tmp8, tmp9] = items3;
function runOnJS(arg0) {
  let closure_0 = arg0;
  return () => {
    c0(...HermesBuiltin.copyRestArgs());
  };
}
const items4 = [tmp9];
runOnJS.__closure = items4;
runOnJS.__workletHash = 13472084703672;
runOnJS.__initData = tmp8;
const items5 = [{ code: "(function getCurrentThreadId_Pnpm_threadsNativeTs5(){return globalThis.__workletsModuleProxy.getCurrentThreadId();})" }];
[tmp10] = items5;
function getCurrentThreadId() {
  return __workletsModuleProxy.getCurrentThreadId();
}
getCurrentThreadId.__workletHash = 13536958329162;
getCurrentThreadId.__initData = tmp10;

export { scheduleOnUI };
export function runOnUI(pnpm_BottomSheetTsx16) {
  let closure_0 = pnpm_BottomSheetTsx16;
  return () => {
    scheduleOnUI(...HermesBuiltin.copyRestArgs());
  };
}
export { runOnUISync };
export function executeOnUIRuntimeSync(arg0) {
  let closure_0 = arg0;
  return () => runOnUISync(...HermesBuiltin.copyRestArgs());
}
export { scheduleOnRN };
export function runOnRNSync(initializer) {
  let applyResult;
  const substr = [...arguments].slice();
  if (globalThis.__RUNTIME_KIND === RuntimeKind.RuntimeKind.ReactNative) {
    const items = [];
    HermesBuiltin.arraySpread(items, substr, 0);
    applyResult = HermesBuiltin.apply(initializer, items, undefined);
  } else {
    const _globalThis = globalThis;
    const runOnRNSync = __workletsModuleProxy.runOnRNSync;
    let __serializerResult = initializer;
    const tmp2Result = _mod1718;
    if (tmp2Result.isWorkletFunction(initializer)) {
      const _globalThis2 = globalThis;
      __serializerResult = globalThis.__serializer(initializer);
    }
    let __serializerResult1;
    if (substr.length > 0) {
      const _globalThis3 = globalThis;
      __serializerResult1 = globalThis.__serializer(substr);
    }
    applyResult = runOnRNSync(__serializerResult, __serializerResult1, undefined);
  }
  return applyResult;
}
export { runOnJS };
export function runOnUIAsync(arg0) {
  let closure_0 = arg0;
  let closure_1 = [...arguments].slice();
  const promise = new Promise((arg0, arg1) => {
    let items = [closure_0, closure_1, arg0, arg1, undefined];
    let arr = closure_4.push(items);
    if (1 === closure_4.length) {
      let tmp2 = globalThis;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(f124754);
    }
  });
  return promise;
}
export { getCurrentThreadId };
