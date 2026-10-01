// Module ID: 16412
// Function ID: 16413
// Name: VibegrationsDebugLabels
// Dependencies: [1115, 3715, 16411, 2]
// Exports: analyticsMemoryValue, analyticsRoleLabel, analyticsUnavailableReason, debugEnvLabel, debugLogFilterLabel, debugYesNo, forceCompactionStatus, isRenderableLog, modelCallOutcome

// Module 16412 (VibegrationsDebugLabels)
import intl6 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsDebugFormat from "VibegrationsDebugFormat" /* 16411 */;
import size from "module_2" /* 2 */;

const set = new Set(["error", "aborted", "length"]);
let closure_4 = {
  db() {
    return _modDef3715.r6cciE;
  },
  db_preview() {
    return _modDef3715.JmIyL8;
  },
  runtime() {
    return _modDef3715.bzNyv8;
  },
  runtime_preview() {
    return _modDef3715["LONZ/8"];
  },
  bot() {
    return _modDef3715.jdpw3A;
  },
  bot_preview() {
    return _modDef3715["/g6wUz"];
  }
};
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDebugLabels.tsx");

export const debugEnvLabel = function debugEnvLabel(env) {
  let kiOVnt;
  const intl = intl6.intl;
  const string = intl.string;
  if ("preview" === env) {
    kiOVnt = _modDef3715["+m8XM6"];
  } else {
    kiOVnt = _modDef3715.kiOVnt;
  }
  return string(kiOVnt);
};
export const debugYesNo = function debugYesNo(connected) {
  const intl = intl6.intl;
  const string = intl.string;
  const tmp = _modDef3715;
  return string(connected ? tmp["9KlveJ"] : tmp["4tYZVa"]);
};
export const DEBUG_LOG_FILTERS = ["all", "preview", "stable", "web"];
export const debugLogFilterLabel = function debugLogFilterLabel(id) {
  let kiOVnt;
  if ("preview" !== id) {
    if ("stable" !== id) {
      if ("web" === id) {
        const intl2 = intl6.intl;
        return intl2.string(_modDef3715.J2TPCe);
      } else {
        const intl = intl6.intl;
        return intl.string(_modDef3715.humq1B);
      }
    }
  }
  const intl3 = intl6.intl;
  const string = intl3.string;
  if ("preview" === id) {
    kiOVnt = _modDef3715["+m8XM6"];
  } else {
    kiOVnt = _modDef3715.kiOVnt;
  }
  return string(kiOVnt);
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
export const MAX_MODEL_CALL_ROWS = 30;
export const modelCallOutcome = function modelCallOutcome(call) {
  let found;
  const hasItem = null != call.stopReason && set.has(call.stopReason);
  let formatMsResult = null;
  if (null != call.durationMs) {
    const obj = VibegrationsDebugFormat;
    formatMsResult = obj.formatMs(call.durationMs);
  }
  const items = [formatMsResult, , ];
  const obj2 = VibegrationsDebugFormat;
  const formatCountResult = obj2.formatCount(call.inputTokens + call.cacheReadTokens + call.cacheWriteTokens);
  const obj3 = VibegrationsDebugFormat;
  items[1] = "" + formatCountResult + " \u2192 " + obj3.formatCount(call.outputTokens);
  let stopReason = null;
  if (hasItem) {
    stopReason = call.stopReason;
  }
  items[2] = stopReason;
  const obj4 = { text: found.join(" \u00B7 "), bad: hasItem };
  found = items.filter((item) => null != item);
  return obj4;
};
export const forceCompactionStatus = function forceCompactionStatus(stateFromStores3) {
  if ("idle" === stateFromStores3) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3715.wBng42);
  } else if ("pending" === stateFromStores3) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3715["0tgo31"]);
  } else {
    const obj3 = VibegrationsDebugFormat;
    const formatObservedAtResult = obj3.formatObservedAt(stateFromStores3.observedAt);
    if ("compacted" === stateFromStores3.outcome) {
      const intl2 = tmp13(1115).intl;
      const obj2 = { time: formatObservedAtResult };
      return intl2.formatToPlainString(_modDef3715["eL8+rZ"], obj2);
    } else {
      let v9vZuG6;
      if ("declined" === stateFromStores3.outcome) {
        v9vZuG6 = _modDef3715["9vZuG6"];
      } else if ("busy" === stateFromStores3.outcome) {
        v9vZuG6 = _modDef3715.GV4sdd;
      } else {
        v9vZuG6 = _modDef3715["Y+0nUb"];
      }
      const intl = tmp13(1115).intl;
      let str2 = stateFromStores3.reason;
      const formatToPlainString = intl.formatToPlainString;
      if (str2 == null) {
        str2 = "no reason given";
      }
      const obj = { reason: str2, time: formatObservedAtResult };
      return formatToPlainString(v9vZuG6, obj);
    }
  }
};
export const analyticsUnavailableReason = function analyticsUnavailableReason(analytics) {
  const reason = analytics.reason;
  if ("local" === reason) {
    const intl5 = intl6.intl;
    return intl5.string(_modDef3715.M7Vn6y);
  } else if ("unconfigured" === reason) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3715.QirpMl);
  } else if ("unauthorized" === reason) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3715.QZ1e4l);
  } else {
    let formatToPlainStringResult;
    if (null != analytics.detail) {
      const intl2 = intl6.intl;
      const obj = { detail: analytics.detail };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef3715.zUTHf7, obj);
    } else {
      const intl = intl6.intl;
      formatToPlainStringResult = intl.string(_modDef3715.WIAQes);
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
    const SBkDIZ = _modDef3715.SBkDIZ;
    let num = found.memory_p50_bytes;
    const formatBytes = VibegrationsDebugFormat.formatBytes;
    VibegrationsDebugFormat;
    if (num == null) {
      num = 0;
    }
    const obj = { p50: formatBytes(num), p999: formatBytes2(num2) };
    num2 = found.memory_p999_bytes;
    formatBytes2 = tmp2(16411).formatBytes;
    VibegrationsDebugFormat;
    if (num2 == null) {
      num2 = found.memory_p50_bytes;
    }
    if (num2 == null) {
      num2 = 0;
    }
    formatToPlainStringResult = formatToPlainString(SBkDIZ, obj);
  } else {
    formatToPlainStringResult = null;
  }
  return formatToPlainStringResult;
};
export const analyticsRoleLabel = function analyticsRoleLabel(role) {
  let tmp = null;
  if ("agent" !== role) {
    tmp = closure_4[role];
  }
  let stringResult = null;
  if (null != tmp) {
    const intl = intl6.intl;
    stringResult = intl.string(tmp());
  }
  return stringResult;
};
