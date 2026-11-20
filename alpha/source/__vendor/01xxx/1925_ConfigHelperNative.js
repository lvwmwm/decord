// Module ID: 1925
// Function ID: 1926
// Name: ConfigHelperNative
// Dependencies: [1666, 1706]
// Exports: configureReanimatedLogger

// Module 1925 (ConfigHelperNative)
import _mod1666 from "module_1666" /* 1666 */;
import _mod1706 from "module_1706" /* 1706 */;

let closure_2 = { code: "(function pnpm_ConfigHelperNativeTs1(data){let[scheduleOnRN,onLog]=this.__closure;scheduleOnRN(onLog,data);})" };

export function configureReanimatedLogger(level, onLog) {
  let tmp10;
  let tmp8;
  let tmp9;
  const obj = _mod1666;
  const loggerConfig = obj.getLoggerConfig();
  const obj2 = _mod1666;
  obj2.updateLoggerConfig(loggerConfig, level, onLog);
  let tmp5;
  if (onLog) {
    const items = [closure_2, tmp(1706).scheduleOnRN, onLog];
    let c0;
    let c1;
    [tmp8, tmp9, tmp10] = items;
    function pnpm_ConfigHelperNativeTs1(arg0) {
      _undefined(c1, arg0);
    }
    const items1 = [tmp9, tmp10];
    pnpm_ConfigHelperNativeTs1.__closure = items1;
    pnpm_ConfigHelperNativeTs1.__workletHash = 13162738946874;
    pnpm_ConfigHelperNativeTs1.__initData = tmp8;
    tmp5 = pnpm_ConfigHelperNativeTs1;
  }
  const tmpResult = _mod1706;
  tmpResult.runOnUISync(_mod1666.updateLoggerConfig, loggerConfig, level, tmp5);
}
