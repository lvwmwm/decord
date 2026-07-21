// Module ID: 1632
// Function ID: 18243
// Name: createWorkletRuntime
// Dependencies: [4294967295]
// Exports: createWorkletRuntime

// Module 1632 (createWorkletRuntime)
const _module = require(dependencyMap[0]);
let closure_3 = _module.shouldBeUseWeb();
let closure_4 = { code: "function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}" };
let closure_5 = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };
let closure_6 = { code: "function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_7 = { code: "function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };

export const createWorkletRuntime = function createWorkletRuntime(arg0, initializer) {
  const global = initializer;
  const require = globalThis.__reanimatedLoggerConfig;
  const ReanimatedModule = require(dependencyMap[1]).ReanimatedModule;
  let obj = require(dependencyMap[2]);
  /* worklet (recovered source) */ function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}
  obj = { registerReanimatedError: require(dependencyMap[3]).registerReanimatedError, registerLoggerConfig: require(dependencyMap[4]).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: require(dependencyMap[5]).setupCallGuard, setupConsole: require(dependencyMap[5]).setupConsole, initializer };
  pnpm_runtimesTs1.__closure = obj;
  pnpm_runtimesTs1.__workletHash = 8531807001072;
  pnpm_runtimesTs1.__initData = closure_4;
  return ReanimatedModule.createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(pnpm_runtimesTs1));
};
export const runOnRuntime = () => {
  function runOnRuntime(arg0, arg1) {
    return globalThis._WORKLET ? () => {
      const length = arguments.length;
      const array = new Array(length);
      const arg0 = array;
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      let obj = arg1(closure_2[2]);
      /* worklet (recovered source) */ function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}
      obj = { worklet: arg1, args: array };
      pnpm_runtimesTs3.__closure = obj;
      pnpm_runtimesTs3.__workletHash = 1376644884193;
      pnpm_runtimesTs3.__initData = closure_6;
      return arg0._scheduleOnRuntime(arg0, obj.makeShareableCloneOnUIRecursive(pnpm_runtimesTs3));
    } : () => {
      const length = arguments.length;
      const array = new Array(length);
      const arg0 = array;
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const ReanimatedModule = arg1(closure_2[1]).ReanimatedModule;
      let obj = arg1(closure_2[2]);
      /* worklet (recovered source) */ function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}
      obj = { worklet: arg1, args: array };
      pnpm_runtimesTs4.__closure = obj;
      pnpm_runtimesTs4.__workletHash = 10918069222950;
      pnpm_runtimesTs4.__initData = closure_7;
      return ReanimatedModule.scheduleOnRuntime(arg0, obj.makeShareableCloneRecursive(pnpm_runtimesTs4));
    };
  }
  runOnRuntime.__closure = { __DEV__: false, SHOULD_BE_USE_WEB: closure_3, isWorkletFunction: require(dependencyMap[6]).isWorkletFunction, makeShareableCloneOnUIRecursive: require(dependencyMap[2]).makeShareableCloneOnUIRecursive, ReanimatedModule: require(dependencyMap[1]).ReanimatedModule, makeShareableCloneRecursive: require(dependencyMap[2]).makeShareableCloneRecursive };
  runOnRuntime.__workletHash = 14671185280560;
  runOnRuntime.__initData = closure_5;
  return runOnRuntime;
}();
