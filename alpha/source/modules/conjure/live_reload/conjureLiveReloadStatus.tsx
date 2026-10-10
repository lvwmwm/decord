// Module ID: 17065
// Function ID: 17066
// Name: conjureLiveReloadStatus
// Dependencies: [3849, 1126, 2]
// Exports: liveReloadDescription, liveReloadDirection, liveReloadSettledDirection

// Module 17065 (conjureLiveReloadStatus)
import intl4 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import size from "module_2" /* 2 */;

function liveReloadProgress(phase, step) {
  let NeoP8L;
  let num2;
  let string;
  let stringResult;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let str = "enable";
  if ("starting" !== phase) {
    let tmp3;
    if ("stopping" === phase) {
      tmp3 = "disable";
    } else {
      tmp3 = null;
    }
    str = tmp3;
  }
  let tmp4 = str;
  if (str == null) {
    tmp4 = tmp;
  }
  if (null == tmp4) {
    return null;
  } else {
    let str6 = "reload";
    if (null != str) {
      let tmp5 = step;
      if ("starting" !== phase) {
        let str4 = "snapshot";
        if ("stopping" === phase) {
          str4 = "stopping";
        }
        tmp5 = str4;
      }
      str6 = tmp5;
    }
    obj = { direction: tmp4, title: string(NeoP8L), stepLabel: stringResult, stepIndex: num2, stepCount: closure_3[tmp4].length };
    const intl = intl4.intl;
    string = intl.string;
    const tmp7 = require;
    if ("enable" === tmp4) {
      NeoP8L = _modDef3849.NeoP8L;
    } else {
      NeoP8L = _modDef3849["3+DCLs"];
    }
    stringResult = null;
    if (null != str6) {
      const intl2 = tmp7(1126).intl;
      stringResult = intl2.string(obj[str6]);
    }
    num2 = 0;
    if (null != str6) {
      const _Math = Math;
      num2 = Math.max(0, arr.indexOf(str6));
    }
    return obj;
  }
}
let closure_3 = { enable: ["sandbox", "files", "packages", "prepare", "build", "server", "reload"], disable: ["snapshot", "stopping", "reload"] };
let obj = { sandbox: _modDef3849.wYBwzU, files: _modDef3849["5hvVF1"], packages: _modDef3849.DKR23W, prepare: _modDef3849.qc4VkW, build: _modDef3849.ZcJIE6, server: _modDef3849.mAXkyS, stopping: _modDef3849.dI8HGD, snapshot: _modDef3849.E3ZRQo, reload: _modDef3849.ZWcCXh };
const result = size.fileFinishedImporting("modules/conjure/live_reload/conjureLiveReloadStatus.tsx");

export function liveReloadDirection(arg0) {
  let str = "enable";
  if ("starting" !== arg0) {
    let tmp;
    if ("stopping" === arg0) {
      tmp = "disable";
    } else {
      tmp = null;
    }
    str = tmp;
  }
  return str;
}
export function liveReloadSettledDirection(arg0, arg1) {
  let str = "enable";
  if ("live" !== arg0) {
    let tmp;
    if ("idle" === arg0) {
      tmp = "disable";
    } else {
      tmp = null;
      if ("error" === arg0) {
        tmp = null;
      }
    }
    str = tmp;
  }
  return str;
}
export { liveReloadProgress };
export const liveReloadDescription = function liveReloadDescription(stateFromStores) {
  const intl = intl4.intl;
  const stringResult = intl.string(_modDef3849.xjblZt);
  if ("error" !== stateFromStores.phase) {
    let combined;
    const tmp6 = liveReloadProgress(stateFromStores.phase, stateFromStores.step);
    if (null != tmp6) {
      let title;
      if (null == tmp6.stepLabel) {
        title = tmp6.title;
      } else {
        const _HermesInternal2 = HermesInternal;
        title = "" + tmp6.title + " \u00B7 " + tmp6.stepLabel;
      }
      combined = title;
    } else {
      combined = stringResult;
      if ("idle" === stateFromStores.phase) {
        combined = stringResult;
        if (stateFromStores.enabled) {
          const intl2 = tmp(1126).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl2.string(tmp3(3849).gCey7s) + " \u00B7 " + stringResult;
        }
      }
    }
    return combined;
  }
  const intl3 = tmp(1126).intl;
  const formatToPlainString = intl3.formatToPlainString;
  const enabled = stateFromStores.enabled;
  const tmp3Result = _modDef3849;
  let error = stateFromStores.error;
  const tmp11 = enabled ? tmp3Result["9YJAIN"] : tmp3Result.JUqlqE;
  if (error == null) {
    error = "";
  }
  return formatToPlainString(tmp11, { error });
};
