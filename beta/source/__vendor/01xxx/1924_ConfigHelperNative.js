// Module ID: 1924
// Function ID: 1925
// Name: ConfigHelperNative
// Dependencies: [1665, 1705]
// Exports: configureReanimatedLogger

// Module 1924 (ConfigHelperNative)
import _mod1665 from "module_1665" /* 1665 */;
import _mod1705 from "module_1705" /* 1705 */;

let closure_2 = { code: "(function pnpm_ConfigHelperNativeTs1(data){let[scheduleOnRN,onLog]=this.__closure;scheduleOnRN(onLog,data);})" };

export function configureReanimatedLogger(level, onLog) {
  let tmp10;
  let tmp8;
  let tmp9;
  const obj = _mod1665;
  const loggerConfig = obj.getLoggerConfig();
  const obj2 = _mod1665;
  obj2.updateLoggerConfig(loggerConfig, level, onLog);
  let tmp5;
  if (onLog) {
    const items = [closure_2, tmp(1705).scheduleOnRN, onLog];
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
  const tmpResult = _mod1705;
  tmpResult.runOnUISync(_mod1665.updateLoggerConfig, loggerConfig, level, tmp5);
}
