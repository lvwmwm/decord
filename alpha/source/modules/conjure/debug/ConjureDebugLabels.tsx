// Module ID: 12562
// Function ID: 12563
// Name: ConjureDebugLabels
// Dependencies: [1125, 3831, 12563, 2]
// Exports: analyticsMemoryValue, analyticsRoleLabel, analyticsUnavailableReason, debugEnvLabel, debugLogFilterLabel, debugYesNo, filterDebugLogs, forceCompactionStatus, isRenderableLog, sandboxRestartStatus

// Module 12562 (ConjureDebugLabels)
import intl6 from "intl" /* 1125 */;
import _modDef3831 from "module_3831" /* 3831 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12563 */;
import size from "module_2" /* 2 */;

let log;

let closure_3 = {
  db() {
    return _modDef3831["7l+DFG"];
  },
  db_preview() {
    return _modDef3831.FAuffi;
  },
  runtime() {
    return _modDef3831["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3831.ynpJzv;
  },
  bot() {
    return _modDef3831["5/i0cj"];
  },
  bot_preview() {
    return _modDef3831.m2jsnw;
  }
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  let eiAi57;
  const intl = intl6.intl;
  const string = intl.string;
  if ("preview" === env) {
    eiAi57 = _modDef3831["2yLYlG"];
  } else {
    eiAi57 = _modDef3831.eiAi57;
  }
  return string(eiAi57);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = intl6.intl;
  const string = intl.string;
  const tmp = _modDef3831;
  return string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  let eiAi57;
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = intl6.intl;
        return intl2.string(_modDef3831.IVzfVV);
      } else {
        const intl = intl6.intl;
        return intl.string(_modDef3831["Um1/8L"]);
      }
    }
  }
  const intl3 = intl6.intl;
  const string = intl3.string;
  if ("preview" === id) {
    eiAi57 = _modDef3831["2yLYlG"];
  } else {
    eiAi57 = _modDef3831.eiAi57;
  }
  return string(eiAi57);
};
export const isRenderableLog = function isRenderableLog(message) {
  message = message.message;
  let tmp = typeof message === "string";
  if (typeof message === "string") {
    tmp = typeof message.level === "string";
  }
  if (tmp) {
    tmp = typeof message.ts === "string";
  }
  return tmp;
};
export const filterDebugLogs = function filterDebugLogs(stateFromStores, arg1, first1) {
  let closure_0 = arg1;
  const str = first1.trim();
  let closure_1 = str.toLowerCase();
  return stateFromStores.filter((log) => {
    log = log.log;
    const message = log.message;
    let tmp = typeof message === "string";
    if (typeof message === "string") {
      tmp = typeof log.level === "string";
    }
    if (tmp) {
      tmp = typeof log.ts === "string";
    }
    let tmp2 = tmp;
    if (tmp2) {
      let tmp4 = "all" === closure_0;
      if (!tmp4) {
        const obj = ConjureDebugFormat;
        tmp4 = obj.debugLogEnv(log.source) === tmp3;
      }
      if (tmp4) {
        let tmp8 = "" === closure_1;
        if (!tmp8) {
          const str3 = log.message;
          const formatted = str3.toLowerCase();
          let hasItem = formatted.includes(tmp7);
          if (!hasItem) {
            const level = log.level;
            hasItem = level.includes(tmp7);
          }
          if (!hasItem) {
            let flag;
            if (log.source != null) {
              const formatted1 = str4.toLowerCase();
              flag = formatted1.includes(tmp7);
            }
            if (flag == null) {
              flag = false;
            }
            hasItem = flag;
          }
          tmp8 = hasItem;
        }
        tmp4 = tmp8;
      }
      tmp2 = tmp4;
    }
    return tmp2;
  });
};
export const forceCompactionStatus = function forceCompactionStatus(forceState) {
  if ("idle" === forceState) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3831.wox6Ev);
  } else if ("pending" === forceState) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3831.OcPHQ1);
  } else {
    const obj3 = ConjureDebugFormat;
    const formatObservedAtResult = obj3.formatObservedAt(forceState.observedAt);
    if ("compacted" === forceState.outcome) {
      const intl2 = tmp12(1125).intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3831.BhRjZZ, obj2);
    } else {
      let ZoUSVK;
      if ("declined" === forceState.outcome) {
        ZoUSVK = _modDef3831["o/FKzF"];
      } else if ("busy" === forceState.outcome) {
        ZoUSVK = _modDef3831.YZb4hK;
      } else {
        ZoUSVK = _modDef3831.ZoUSVK;
      }
      const intl = tmp12(1125).intl;
      let str2 = forceState.reason;
      const formatToPlainString = intl.formatToPlainString;
      if (str2 == null) {
        str2 = "no reason given";
      }
      const obj = { reason: str2, time: formatObservedAtResult };
      return formatToPlainString(ZoUSVK, obj);
    }
  }
};
export const analyticsUnavailableReason = function analyticsUnavailableReason(analytics) {
  const reason = analytics.reason;
  if ("local" === reason) {
    const intl5 = intl6.intl;
    return intl5.string(_modDef3831.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3831.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3831.KLx6Bb);
  } else {
    let formatToPlainStringResult;
    if (null != analytics.detail) {
      const intl2 = intl6.intl;
      const obj = { detail: analytics.detail };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3831.t09Q6q, obj);
    } else {
      const intl = intl6.intl;
      formatToPlainStringResult = intl.string(_modDef3831["t+tG59"]);
    }
    return formatToPlainStringResult;
  }
};
export const analyticsMemoryValue = function analyticsMemoryValue(found) {
  let formatBytes2;
  let formatToPlainStringResult;
  let num2;
  if (null != found.memory_p50_bytes) {
    const intl = intl6.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = _modDef3831["XO/bN4"];
    let num = found.memory_p50_bytes;
    const formatBytes = ConjureDebugFormat.formatBytes;
    ConjureDebugFormat;
    if (num == null) {
      num = 0;
    }
    const obj = { p50: formatBytes(num), p999: formatBytes2(num2) };
    num2 = found.memory_p999_bytes;
    formatBytes2 = tmp2(12563).formatBytes;
    ConjureDebugFormat;
    if (num2 == null) {
      num2 = found.memory_p50_bytes;
    }
    if (num2 == null) {
      num2 = 0;
    }
    formatToPlainStringResult = formatToPlainString(prop, obj);
  } else {
    formatToPlainStringResult = null;
  }
  return formatToPlainStringResult;
};
export const analyticsRoleLabel = function analyticsRoleLabel(role) {
  let tmp = null;
  if ("agent" !== role) {
    tmp = closure_3[role];
  }
  let stringResult = null;
  if (null != tmp) {
    const intl = intl6.intl;
    stringResult = intl.string(tmp());
  }
  return stringResult;
};
export const sandboxRestartStatus = function sandboxRestartStatus(restartState) {
  if ("idle" === restartState) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3831.mlok8D);
  } else if ("pending" === restartState) {
    const intl = intl6.intl;
    return intl.string(_modDef3831["1ugSyK"]);
  } else {
    let FiVRoT;
    const obj2 = ConjureDebugFormat;
    const formatObservedAtResult = obj2.formatObservedAt(restartState.observedAt);
    const intl3 = intl6.intl;
    const formatToPlainString = intl3.formatToPlainString;
    if ("restarted" === restartState.outcome) {
      FiVRoT = _modDef3831["76mfqO"];
    } else {
      FiVRoT = _modDef3831.FiVRoT;
    }
    let str = restartState.reason;
    if (str == null) {
      str = "";
    }
    const obj = { reason: str, time: formatObservedAtResult };
    return formatToPlainString(FiVRoT, obj);
  }
};
