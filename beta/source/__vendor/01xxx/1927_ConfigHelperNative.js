// Module ID: 1927
// Function ID: 1928
// Name: ConfigHelperNative
// Dependencies: [1668, 1708]
// Exports: configureReanimatedLogger

// Module 1927 (ConfigHelperNative)
import _mod1668 from "module_1668" /* 1668 */;
import _mod1708 from "module_1708" /* 1708 */;

let closure_2 = { code: "(function pnpm_ConfigHelperNativeTs1(data){let[scheduleOnRN,onLog]=this.__closure;scheduleOnRN(onLog,data);})" };

export function configureReanimatedLogger(level, onLog) {
  let tmp10;
  let tmp8;
  let tmp9;
  const obj = _mod1668;
  const loggerConfig = obj.getLoggerConfig();
  const obj2 = _mod1668;
  obj2.updateLoggerConfig(loggerConfig, level, onLog);
  let tmp5;
  if (onLog) {
    const items = [closure_2, tmp(1708).scheduleOnRN, onLog];
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
  const tmpResult = _mod1708;
  tmpResult.runOnUISync(_mod1668.updateLoggerConfig, loggerConfig, level, tmp5);
}
