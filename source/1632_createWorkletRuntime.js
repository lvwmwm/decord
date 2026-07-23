// Module ID: 1632
// Function ID: 18244
// Name: createWorkletRuntime
// Dependencies: [1585, 1590, 1612, 1593, 1586, 1584, 1607]
// Exports: createWorkletRuntime

// Module 1632 (createWorkletRuntime)
import isJest from "isJest";

isJest = isJest.shouldBeUseWeb();
let closure_4 = { code: "function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}" };
let closure_5 = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };
let closure_6 = { code: "function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_7 = { code: "function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };

export const createWorkletRuntime = function createWorkletRuntime(arg0, initializer) {
  let closure_0 = initializer;
  const ReanimatedModule = __reanimatedLoggerConfig(1590).ReanimatedModule;
  let obj = __reanimatedLoggerConfig(1612);
  /* worklet (recovered source) */ function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}
  obj = { registerReanimatedError: __reanimatedLoggerConfig(1593).registerReanimatedError, registerLoggerConfig: __reanimatedLoggerConfig(1586).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: __reanimatedLoggerConfig(1584).setupCallGuard, setupConsole: __reanimatedLoggerConfig(1584).setupConsole, initializer };
  pnpm_runtimesTs1.__closure = obj;
  pnpm_runtimesTs1.__workletHash = 8531807001072;
  pnpm_runtimesTs1.__initData = closure_4;
  return ReanimatedModule.createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(pnpm_runtimesTs1));
};
export const runOnRuntime = (() => {
  function runOnRuntime(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return globalThis._WORKLET ? (() => {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      let obj = outer2_1(outer2_2[2]);
      /* worklet (recovered source) */ function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}
      obj = { worklet: closure_1, args: array };
      pnpm_runtimesTs3.__closure = obj;
      pnpm_runtimesTs3.__workletHash = 1376644884193;
      pnpm_runtimesTs3.__initData = outer2_6;
      return outer2_0._scheduleOnRuntime(array, obj.makeShareableCloneOnUIRecursive(pnpm_runtimesTs3));
    }) : (() => {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const ReanimatedModule = outer2_1(outer2_2[1]).ReanimatedModule;
      let obj = outer2_1(outer2_2[2]);
      /* worklet (recovered source) */ function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}
      obj = { worklet: closure_1, args: array };
      pnpm_runtimesTs4.__closure = obj;
      pnpm_runtimesTs4.__workletHash = 10918069222950;
      pnpm_runtimesTs4.__initData = outer2_7;
      return ReanimatedModule.scheduleOnRuntime(array, obj.makeShareableCloneRecursive(pnpm_runtimesTs4));
    });
  }
  runOnRuntime.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: isJest, isWorkletFunction: require(1607) /* isWorkletFunction */.isWorkletFunction, makeShareableCloneOnUIRecursive: require(1612) /* isPlainJSObject */.makeShareableCloneOnUIRecursive, ReanimatedModule: require(1590) /* ReanimatedModule */.ReanimatedModule, makeShareableCloneRecursive: require(1612) /* isPlainJSObject */.makeShareableCloneRecursive };
  runOnRuntime.__workletHash = 14671185280560;
  runOnRuntime.__initData = closure_5;
  return runOnRuntime;
})();
