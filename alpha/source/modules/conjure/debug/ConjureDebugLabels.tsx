// Module ID: 17289
// Function ID: 17290
// Name: ConjureDebugLabels
// Dependencies: [1126, 3849, 17288, 2]
// Exports: analyticsMemoryValue, analyticsRoleLabel, analyticsUnavailableReason, debugEnvLabel, debugLogFilterLabel, debugYesNo, forceCompactionStatus, isRenderableLog, sandboxRestartStatus

// Module 17289 (ConjureDebugLabels)
import intl6 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureDebugFormat from "ConjureDebugFormat" /* 17288 */;
import size from "module_2" /* 2 */;

let closure_3 = {
  db() {
    return _modDef3849["7l+DFG"];
  },
  db_preview() {
    return _modDef3849.FAuffi;
  },
  runtime() {
    return _modDef3849["Gkl+ab"];
  },
  runtime_preview() {
    return _modDef3849.ynpJzv;
  },
  bot() {
    return _modDef3849["5/i0cj"];
  },
  bot_preview() {
    return _modDef3849.m2jsnw;
  }
};
const result = size.fileFinishedImporting("modules/conjure/debug/ConjureDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  let eiAi57;
  const intl = intl6.intl;
  const string = intl.string;
  if ("preview" === env) {
    eiAi57 = _modDef3849["2yLYlG"];
  } else {
    eiAi57 = _modDef3849.eiAi57;
  }
  return string(eiAi57);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = intl6.intl;
  const string = intl.string;
  const tmp = _modDef3849;
  return string(connected ? tmp.Wv025I : tmp["7/lsFY"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  let eiAi57;
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = intl6.intl;
        return intl2.string(_modDef3849.IVzfVV);
      } else {
        const intl = intl6.intl;
        return intl.string(_modDef3849["Um1/8L"]);
      }
    }
  }
  const intl3 = intl6.intl;
  const string = intl3.string;
  if ("preview" === id) {
    eiAi57 = _modDef3849["2yLYlG"];
  } else {
    eiAi57 = _modDef3849.eiAi57;
  }
  return string(eiAi57);
};
export const isRenderableLog = function isRenderableLog(log) {
  const message = log.message;
  let tmp = typeof message === "string";
  if (typeof message === "string") {
    tmp = typeof log.level === "string";
  }
  if (tmp) {
    tmp = typeof log.ts === "string";
  }
  return tmp;
};
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3849.wox6Ev);
  } else if ("pending" === stateFromStores3) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3849.OcPHQ1);
  } else {
    const obj3 = ConjureDebugFormat;
    const formatObservedAtResult = obj3.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = tmp12(1126).intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3849.BhRjZZ, obj2);
    } else {
      let ZoUSVK;
      if ("declined" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3849["o/FKzF"];
      } else if ("busy" === stateFromStores3.outcome) {
        ZoUSVK = _modDef3849.YZb4hK;
      } else {
        ZoUSVK = _modDef3849.ZoUSVK;
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
    return intl5.string(_modDef3849.mUeKML);
  } else if ("unconfigured" === reason) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3849.bGefb5);
  } else if ("unauthorized" === reason) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3849.KLx6Bb);
  } else {
    let formatToPlainStringResult;
    if (null != analytics.detail) {
      const intl2 = intl6.intl;
      const obj = { detail: analytics.detail };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3849.t09Q6q, obj);
    } else {
      const intl = intl6.intl;
      formatToPlainStringResult = intl.string(_modDef3849["t+tG59"]);
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
    const prop = _modDef3849["XO/bN4"];
    let num = found.memory_p50_bytes;
    const formatBytes = ConjureDebugFormat.formatBytes;
    ConjureDebugFormat;
    if (num == null) {
      num = 0;
    }
    const obj = { p50: formatBytes(num), p999: formatBytes2(num2) };
    num2 = found.memory_p999_bytes;
    formatBytes2 = tmp2(17288).formatBytes;
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
    return intl2.string(_modDef3849.mlok8D);
  } else if ("pending" === stateFromStores4) {
    const intl = intl6.intl;
    return intl.string(_modDef3849["1ugSyK"]);
  } else {
    let FiVRoT;
    const obj2 = ConjureDebugFormat;
    const formatObservedAtResult = obj2.formatObservedAt(stateFromStores4.observedAt);
    const intl3 = intl6.intl;
    const formatToPlainString = intl3.formatToPlainString;
    if ("restarted" === stateFromStores4.outcome) {
      FiVRoT = _modDef3849["76mfqO"];
    } else {
      FiVRoT = _modDef3849.FiVRoT;
    }
    let str = stateFromStores4.reason;
    if (str == null) {
      str = "";
    }
    const obj = { reason: str, time: formatObservedAtResult };
    return formatToPlainString(FiVRoT, obj);
  }
};
