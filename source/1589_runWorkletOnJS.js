// Module ID: 1589
// Function ID: 17732
// Name: runWorkletOnJS
// Dependencies: []
// Exports: executeOnUIRuntimeSync

// Module 1589 (runWorkletOnJS)
function runWorkletOnJS(apply) {
  const length = arguments.length;
  let num = 0;
  if (length > 1) {
    num = length - 1;
  }
  const array = new Array(num);
  for (let num2 = 1; num2 < length; num2 = num2 + 1) {
    array[num2 - 1] = arguments[num2];
  }
  apply.apply(undefined, array);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let obj = arg1(dependencyMap[2]);
let closure_5 = obj.isJest();
const shouldBeUseWebResult = arg1(dependencyMap[2]).shouldBeUseWeb();
let closure_7 = [];
let closure_8 = { code: "function setupMicrotasks_Pnpm_threadsTs1(){let microtasksQueue=[];let isExecutingMicrotasksQueue=false;global.queueMicrotask=function(callback){microtasksQueue.push(callback);};global.__callMicrotasks=function(){if(isExecutingMicrotasksQueue){return;}try{isExecutingMicrotasksQueue=true;for(let index=0;index<microtasksQueue.length;index+=1){microtasksQueue[index]();}microtasksQueue=[];global._maybeFlushUIUpdatesQueue();}finally{isExecutingMicrotasksQueue=false;}};}" };
let closure_9 = { code: "function callMicrotasksOnUIThread_Pnpm_threadsTs2(){global.__callMicrotasks();}" };
const obj2 = arg1(dependencyMap[2]);
let fn = () => {
  function callMicrotasksOnUIThread() {
    closure_0.__callMicrotasks();
  }
  callMicrotasksOnUIThread.__closure = {};
  callMicrotasksOnUIThread.__workletHash = 741957556389;
  callMicrotasksOnUIThread.__initData = closure_9;
  return callMicrotasksOnUIThread;
}();
if (shouldBeUseWebResult) {
  fn = () => {

  };
}
let closure_11 = { code: "function runOnUI_Pnpm_threadsTs3(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,IS_JEST,ReanimatedModule,makeShareableCloneRecursive,callMicrotasks}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUI` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUI` can only be used with worklets.');}return function(...args){if(IS_JEST){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));return;}if(__DEV__){makeShareableCloneRecursive(worklet);makeShareableCloneRecursive(args);}_runOnUIQueue.push([worklet,args]);if(_runOnUIQueue.length===1){queueMicrotask(function(){const queue=_runOnUIQueue;_runOnUIQueue=[];ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}));});}};}" };
let closure_12 = { code: "function pnpm_threadsTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_13 = { code: "function pnpm_threadsTs5(){const{queue,callMicrotasks}=this.__closure;queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}" };
let closure_14 = { code: "function pnpm_threadsTs6(){const{worklet,args,makeShareableCloneOnUIRecursive}=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);}" };
let closure_15 = { code: "function runOnUIImmediately_Pnpm_threadsTs7(worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&_WORKLET){throw new ReanimatedError('`runOnUIImmediately` cannot be called on the UI runtime. Please call the function synchronously or use `queueMicrotask` or `requestAnimationFrame` instead.');}if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('`runOnUIImmediately` can only be used with worklets.');}return function(...args){ReanimatedModule.scheduleOnUI(makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };
let closure_16 = { code: "function pnpm_threadsTs8(){const{worklet,args}=this.__closure;worklet(...args);}" };
const tmp3 = () => {
  function setupMicrotasks() {
    let closure_0 = [];
    let closure_1 = false;
    closure_0.queueMicrotask = (arg0) => {

    };
    closure_0.__callMicrotasks = () => {
      let length;
      let sum;
      if (!closure_1) {
        closure_1 = true;
        let num2 = 0;
        if (0 < arr.length) {
          do {
            let tmp2 = closure_0;
            let tmp3 = num2;
            let tmp4 = closure_0[num2]();
            sum = num2 + 1;
            num2 = sum;
            let tmp6 = closure_0;
            length = closure_0.length;
          } while (sum < length);
        }
        const arr = [];
        const result = arr._maybeFlushUIUpdatesQueue();
        closure_1 = false;
      }
    };
  }
  setupMicrotasks.__closure = {};
  setupMicrotasks.__workletHash = 2487728156345;
  setupMicrotasks.__initData = closure_8;
  return setupMicrotasks;
}();
function runOnJS(__remoteFunction) {
  let global = __remoteFunction;
  if (!shouldBeUseWebResult) {
    if (globalThis._WORKLET) {
      if (obj.isWorkletFunction(__remoteFunction)) {
        return () => {
          const length = arguments.length;
          const array = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            array[num] = arguments[num];
          }
          const items = [__remoteFunction];
          return callback(closure_18).apply(undefined, items.concat(array));
        };
      } else {
        let tmp4 = __remoteFunction;
        if (__remoteFunction.__remoteFunction) {
          __remoteFunction = __remoteFunction.__remoteFunction;
          global = __remoteFunction;
          tmp4 = __remoteFunction;
        }
        if ("function" === typeof tmp4) {
          let _scheduleRemoteFunctionOnJS = global._scheduleHostFunctionOnJS;
        } else {
          _scheduleRemoteFunctionOnJS = global._scheduleRemoteFunctionOnJS;
        }
        const arg1 = _scheduleRemoteFunctionOnJS;
        return () => {
          const length = arguments.length;
          const arr = new Array(length);
          for (let num = 0; num < length; num = num + 1) {
            arr[num] = arguments[num];
          }
          let shareableCloneOnUIRecursive;
          if (arr.length > 0) {
            shareableCloneOnUIRecursive = _scheduleRemoteFunctionOnJS(closure_2[4]).makeShareableCloneOnUIRecursive(arr);
            const obj = _scheduleRemoteFunctionOnJS(closure_2[4]);
          }
          _scheduleRemoteFunctionOnJS(__remoteFunction, shareableCloneOnUIRecursive);
        };
      }
      const obj = arg1(dependencyMap[5]);
    }
  }
  return () => {
    const length = arguments.length;
    const arr = new Array(length);
    const __remoteFunction = arr;
    for (let num = 0; num < length; num = num + 1) {
      arr[num] = arguments[num];
    }
    return queueMicrotask(arr.length ? () => arr.apply(undefined, arr) : __remoteFunction);
  };
}
obj = { SHOULD_BE_USE_WEB: shouldBeUseWebResult };
const tmp4 = () => {
  function runOnUI(fn) {
    return () => {
      const length = arguments.length;
      const array = new Array(length);
      const arg0 = array;
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      if (closure_5) {
        const ReanimatedModule = callback(closure_2[3]).ReanimatedModule;
        let obj = callback(closure_2[4]);
        /* worklet (recovered source) */ function pnpm_threadsTs4(){const{worklet,args}=this.__closure;worklet(...args);}
        obj = { worklet: arg0, args: array };
        pnpm_threadsTs4.__closure = obj;
        pnpm_threadsTs4.__workletHash = 10268384484340;
        pnpm_threadsTs4.__initData = closure_12;
        ReanimatedModule.scheduleOnUI(obj.makeShareableCloneRecursive(pnpm_threadsTs4));
      } else {
        const items = [arg0, array];
        const arr = arr.push(items);
        if (1 === arr.length) {
          const _queueMicrotask = queueMicrotask;
          queueMicrotask(() => {
            let closure_0 = closure_7;
            closure_7 = [];
            const ReanimatedModule = callback(closure_2[3]).ReanimatedModule;
            let obj = callback(closure_2[4]);
            /* worklet (recovered source) */ function pnpm_threadsTs5(){const{queue,callMicrotasks}=this.__closure;queue.forEach(function([worklet,args]){worklet(...args);});callMicrotasks();}
            obj = { queue: closure_7, callMicrotasks: closure_10 };
            pnpm_threadsTs5.__closure = obj;
            pnpm_threadsTs5.__workletHash = 2773761092576;
            pnpm_threadsTs5.__initData = closure_13;
            ReanimatedModule.scheduleOnUI(obj.makeShareableCloneRecursive(pnpm_threadsTs5));
          });
        }
      }
    };
  }
  runOnUI.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: shouldBeUseWebResult, isWorkletFunction: arg1(dependencyMap[5]).isWorkletFunction, IS_JEST: closure_5, ReanimatedModule: arg1(dependencyMap[3]).ReanimatedModule, makeShareableCloneRecursive: arg1(dependencyMap[4]).makeShareableCloneRecursive, callMicrotasks: fn };
  runOnUI.__workletHash = 8710271011487;
  runOnUI.__initData = closure_11;
  return runOnUI;
}();
obj.isWorkletFunction = arg1(dependencyMap[5]).isWorkletFunction;
obj.runWorkletOnJS = runWorkletOnJS;
obj.makeShareableCloneOnUIRecursive = arg1(dependencyMap[4]).makeShareableCloneOnUIRecursive;
runOnJS.__closure = obj;
runOnJS.__workletHash = 4576792393858;
runOnJS.__initData = { code: "function runOnJS_Pnpm_threadsTs9(fun){const runOnJS_Pnpm_threadsTs9=this._recur;const{SHOULD_BE_USE_WEB,isWorkletFunction,runWorkletOnJS,makeShareableCloneOnUIRecursive}=this.__closure;if(SHOULD_BE_USE_WEB||!_WORKLET){return function(...args){return queueMicrotask(args.length?function(){return fun(...args);}:fun);};}if(isWorkletFunction(fun)){return function(...args){return runOnJS_Pnpm_threadsTs9(runWorkletOnJS)(fun,...args);};}if(fun.__remoteFunction){fun=fun.__remoteFunction;}const scheduleOnJS=typeof fun==='function'?global._scheduleHostFunctionOnJS:global._scheduleRemoteFunctionOnJS;return function(...args){scheduleOnJS(fun,args.length>0?makeShareableCloneOnUIRecursive(args):undefined);};}" };

export const setupMicrotasks = tmp3;
export const callMicrotasks = fn;
export const runOnUI = tmp4;
export function executeOnUIRuntimeSync(arg0) {
  const global = arg0;
  return () => {
    const length = arguments.length;
    const array = new Array(length);
    const arg0 = array;
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const ReanimatedModule = callback(closure_2[3]).ReanimatedModule;
    let obj = callback(closure_2[4]);
    /* worklet (recovered source) */ function pnpm_threadsTs6(){const{worklet,args,makeShareableCloneOnUIRecursive}=this.__closure;const result=worklet(...args);return makeShareableCloneOnUIRecursive(result);}
    obj = { worklet: arg0, args: array, makeShareableCloneOnUIRecursive: callback(closure_2[4]).makeShareableCloneOnUIRecursive };
    pnpm_threadsTs6.__closure = obj;
    pnpm_threadsTs6.__workletHash = 6038069575410;
    pnpm_threadsTs6.__initData = closure_14;
    return ReanimatedModule.executeOnUIRuntimeSync(obj.makeShareableCloneRecursive(pnpm_threadsTs6));
  };
}
export const runOnUIImmediately = () => {
  function runOnUIImmediately(pnpm_FrameCallbackRegistryUITs1) {
    return () => {
      const length = arguments.length;
      const array = new Array(length);
      const arg0 = array;
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const ReanimatedModule = callback(closure_2[3]).ReanimatedModule;
      let obj = callback(closure_2[4]);
      /* worklet (recovered source) */ function pnpm_threadsTs8(){const{worklet,args}=this.__closure;worklet(...args);}
      obj = { worklet: arg0, args: array };
      pnpm_threadsTs8.__closure = obj;
      pnpm_threadsTs8.__workletHash = 6969436050040;
      pnpm_threadsTs8.__initData = closure_16;
      ReanimatedModule.scheduleOnUI(obj.makeShareableCloneRecursive(pnpm_threadsTs8));
    };
  }
  runOnUIImmediately.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: shouldBeUseWebResult, isWorkletFunction: arg1(dependencyMap[5]).isWorkletFunction, ReanimatedModule: arg1(dependencyMap[3]).ReanimatedModule, makeShareableCloneRecursive: arg1(dependencyMap[4]).makeShareableCloneRecursive };
  runOnUIImmediately.__workletHash = 3385146413149;
  runOnUIImmediately.__initData = closure_15;
  return runOnUIImmediately;
}();
export { runOnJS };
