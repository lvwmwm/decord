// Module ID: 18159
// Function ID: 18160
// Name: conjureLiveReloadStatus
// Dependencies: [4091, 1112, 2]
// Exports: liveReloadDescription, liveReloadDirection, liveReloadSettledDirection

// Module 18159 (conjureLiveReloadStatus)
import intl4 from "intl" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
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
      NeoP8L = _modDef4091.NeoP8L;
    } else {
      NeoP8L = _modDef4091["3+DCLs"];
    }
    stringResult = null;
    if (null != str6) {
      const intl2 = tmp7(1112).intl;
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
let obj = { sandbox: _modDef4091.wYBwzU, files: _modDef4091["5hvVF1"], packages: _modDef4091.DKR23W, prepare: _modDef4091.qc4VkW, build: _modDef4091.ZcJIE6, server: _modDef4091.mAXkyS, stopping: _modDef4091.dI8HGD, snapshot: _modDef4091.E3ZRQo, reload: _modDef4091.ZWcCXh };
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
export function liveReloadDescription(stateFromStores) {
  const intl = intl4.intl;
  const stringResult = intl.string(_modDef4091.xjblZt);
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
          const intl2 = tmp(1112).intl;
          const _HermesInternal = HermesInternal;
          combined = "" + intl2.string(tmp3(4091).gCey7s) + " \u00B7 " + stringResult;
        }
      }
    }
    return combined;
  }
  const intl3 = tmp(1112).intl;
  const formatToPlainString = intl3.formatToPlainString;
  const enabled = stateFromStores.enabled;
  const tmp3Result = _modDef4091;
  let error = stateFromStores.error;
  const tmp11 = enabled ? tmp3Result["9YJAIN"] : tmp3Result.JUqlqE;
  if (error == null) {
    error = "";
  }
  return formatToPlainString(tmp11, { error });
}
