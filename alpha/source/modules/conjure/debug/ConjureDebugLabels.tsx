// Module ID: 12250
// Function ID: 12251
// Name: ConjureDebugLabels
// Dependencies: [1126, 3862, 12249, 2]
// Exports: analyticsMemoryValue, analyticsRoleLabel, analyticsUnavailableReason, debugEnvLabel, debugLogFilterLabel, debugYesNo, filterDebugLogs, forceCompactionStatus, isRenderableLog, sandboxRestartStatus

// Module 12250 (ConjureDebugLabels)
import intl6 from "intl" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 12249 */;
import size from "module_2" /* 2 */;

let log;

let closure_3 = {
  db() {
    return _modDef3862["7l+DFG"];
  },
  db_preview() {
    return _modDef3862.FAuffi;
  },
  runtime() {
    return _modDef3862["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3862.ynpJzv;
  },
  bot() {
    return _modDef3862["5/i0cj"];
  },
  bot_preview() {
    return _modDef3862.m2jsnw;
  }
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  let eiAi57;
  const intl = intl6.intl;
  const string = intl.string;
  if ("preview" === env) {
    eiAi57 = _modDef3862["2yLYlG"];
  } else {
    eiAi57 = _modDef3862.eiAi57;
  }
  return string(eiAi57);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = intl6.intl;
  const string = intl.string;
  const tmp = _modDef3862;
  return string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  let eiAi57;
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = intl6.intl;
        return intl2.string(_modDef3862.IVzfVV);
      } else {
        const intl = intl6.intl;
        return intl.string(_modDef3862["Um1/8L"]);
      }
    }
  }
  const intl3 = intl6.intl;
  const string = intl3.string;
  if ("preview" === id) {
    eiAi57 = _modDef3862["2yLYlG"];
  } else {
    eiAi57 = _modDef3862.eiAi57;
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
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3862.wox6Ev);
  } else if ("pending" === stateFromStores3) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3862.OcPHQ1);
  } else {
    const obj3 = ConjureDebugFormat;
    const formatObservedAtResult = obj3.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = tmp12(1126).intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3862.BhRjZZ, obj2);
    } else {
      let ZoUSVK;
      if ("declined" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3862["o/FKzF"];
      } else if ("busy" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3862.YZb4hK;
      } else {
        ZoUSVK = _modDef3862.ZoUSVK;
      }
      const intl = tmp12(1126).intl;
      let str2 = stateFromStores3.reason;
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
    return intl5.string(_modDef3862.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3862.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3862.KLx6Bb);
  } else {
    let formatToPlainStringResult;
    if (null != analytics.detail) {
      const intl2 = intl6.intl;
      const obj = { detail: analytics.detail };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3862.t09Q6q, obj);
    } else {
      const intl = intl6.intl;
      formatToPlainStringResult = intl.string(_modDef3862["t+tG59"]);
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
    const prop = _modDef3862["XO/bN4"];
    let num = found.memory_p50_bytes;
    const formatBytes = ConjureDebugFormat.formatBytes;
    ConjureDebugFormat;
    if (num == null) {
      num = 0;
    }
    const obj = { p50: formatBytes(num), p999: formatBytes2(num2) };
    num2 = found.memory_p999_bytes;
    formatBytes2 = tmp2(12249).formatBytes;
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
export const sandboxRestartStatus = function sandboxRestartStatus(stateFromStores4) {
  if ("idle" === stateFromStores4) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3862.mlok8D);
  } else if ("pending" === stateFromStores4) {
    const intl = intl6.intl;
    return intl.string(_modDef3862["1ugSyK"]);
  } else {
    let FiVRoT;
    const obj2 = ConjureDebugFormat;
    const formatObservedAtResult = obj2.formatObservedAt(stateFromStores4.observedAt);
    const intl3 = intl6.intl;
    const formatToPlainString = intl3.formatToPlainString;
    if ("restarted" === stateFromStores4.outcome) {
      FiVRoT = _modDef3862["76mfqO"];
    } else {
      FiVRoT = _modDef3862.FiVRoT;
    }
    let str = stateFromStores4.reason;
    if (str == null) {
      str = "";
    }
    const obj = { reason: str, time: formatObservedAtResult };
    return formatToPlainString(FiVRoT, obj);
  }
};
