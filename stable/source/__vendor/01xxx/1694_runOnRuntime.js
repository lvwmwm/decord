// Module ID: 1694
// Function ID: 1695
// Name: runOnRuntime
// Dependencies: [1647, 1652, 1674, 1655, 1648, 1646, 1669]
// Exports: createWorkletRuntime, runOnRuntime

// Module 1694 (runOnRuntime)
import callGuardDEV from "callGuardDEV" /* 1646 */;
import react_native from "react-native" /* 1648 */;
import ReanimatedModule2 from "ReanimatedModule" /* 1652 */;
import ReanimatedError from "ReanimatedError" /* 1655 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1669 */;
import _mod1674 from "module_1674" /* 1674 */;
import module_1647 from "module_1647" /* 1647 */;

const __initData = { code: "function pnpm_runtimesTs1(){const{registerReanimatedError,registerLoggerConfig,config,setupCallGuard,setupConsole,initializer}=this.__closure;var _initializer;registerReanimatedError();registerLoggerConfig(config);setupCallGuard();setupConsole();(_initializer=initializer)===null||_initializer===void 0||_initializer();}" };
let closure_4 = { code: "function pnpm_runtimesTs3(){const{worklet,args}=this.__closure;worklet(...args);}" };
let closure_5 = { code: "function pnpm_runtimesTs4(){const{worklet,args}=this.__closure;worklet(...args);}" };
function runOnRuntime(arg0, worklet) {
  let _scheduleOnRuntime = arg0;
  return globalThis._WORKLET ? (() => {
    const items = [...arguments];
    _scheduleOnRuntime = _scheduleOnRuntime._scheduleOnRuntime;
    const fn = function u() {
      worklet(...items);
    };
    const obj2 = { worklet, args: items };
    fn.__closure = obj2;
    fn.__workletHash = 1376644884193;
    fn.__initData = __initData;
    const obj = worklet(dependencyMap[2]);
    return _scheduleOnRuntime(items, obj.makeShareableCloneOnUIRecursive(fn));
  }) : (() => {
    const items = [...arguments];
    const ReanimatedModule = worklet(dependencyMap[1]).ReanimatedModule;
    const scheduleOnRuntime = ReanimatedModule.scheduleOnRuntime;
    const fn = function l() {
      worklet(...items);
    };
    const obj2 = { worklet, args: items };
    fn.__closure = obj2;
    fn.__workletHash = 10918069222950;
    fn.__initData = __initData2;
    const obj = worklet(dependencyMap[2]);
    return scheduleOnRuntime(items, obj.makeShareableCloneRecursive(fn));
  });
}
let obj = { __DEV__: false, SHOULD_BE_USE_WEB: module_1647.shouldBeUseWeb(), isWorkletFunction: LayoutAnimationType.isWorkletFunction, makeShareableCloneOnUIRecursive: _mod1674.makeShareableCloneOnUIRecursive, ReanimatedModule: ReanimatedModule2.ReanimatedModule, makeShareableCloneRecursive: _mod1674.makeShareableCloneRecursive };
runOnRuntime.__closure = obj;
runOnRuntime.__workletHash = 14671185280560;
runOnRuntime.__initData = { code: "function runOnRuntime_Pnpm_runtimesTs2(workletRuntime,worklet){const{__DEV__,SHOULD_BE_USE_WEB,isWorkletFunction,makeShareableCloneOnUIRecursive,ReanimatedModule,makeShareableCloneRecursive}=this.__closure;if(__DEV__&&!SHOULD_BE_USE_WEB&&!isWorkletFunction(worklet)){throw new ReanimatedError('The function passed to `runOnRuntime` is not a worklet.'+(_WORKLET?' Please make sure that `processNestedWorklets` option in Reanimated Babel plugin is enabled.':''));}if(_WORKLET){return function(...args){return global._scheduleOnRuntime(workletRuntime,makeShareableCloneOnUIRecursive(function(){'worklet';worklet(...args);}));};}return function(...args){return ReanimatedModule.scheduleOnRuntime(workletRuntime,makeShareableCloneRecursive(function(){'worklet';worklet(...args);}));};}" };

export const createWorkletRuntime = function createWorkletRuntime(arg0, initializer) {
  const ReanimatedModule = __reanimatedLoggerConfig(1652).ReanimatedModule;
  const createWorkletRuntime = ReanimatedModule.createWorkletRuntime;
  let obj = __reanimatedLoggerConfig(1674);
  const fn = function l() {
    const obj = ReanimatedError;
    const result = obj.registerReanimatedError();
    const obj2 = react_native;
    obj2.registerLoggerConfig(__reanimatedLoggerConfig);
    const obj3 = callGuardDEV;
    obj3.setupCallGuard();
    const obj4 = callGuardDEV;
    obj4.setupConsole();
    if (initializer != null) {
      initializer();
    }
  };
  let obj2 = { registerReanimatedError: __reanimatedLoggerConfig(1655).registerReanimatedError, registerLoggerConfig: __reanimatedLoggerConfig(1648).registerLoggerConfig, config: globalThis.__reanimatedLoggerConfig, setupCallGuard: __reanimatedLoggerConfig(1646).setupCallGuard, setupConsole: __reanimatedLoggerConfig(1646).setupConsole, initializer };
  fn.__closure = obj2;
  fn.__workletHash = 8531807001072;
  fn.__initData = __initData;
  return createWorkletRuntime(arg0, obj.makeShareableCloneRecursive(fn));
};
export { runOnRuntime };
