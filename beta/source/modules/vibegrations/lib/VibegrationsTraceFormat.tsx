// Module ID: 16419
// Function ID: 16420
// Name: vibegrations/VibegrationsTraceFormat
// Dependencies: [1127, 3718, 2]
// Exports: categoryLabel, formatDuration, formatTokens, omissionLabel, statusLabel, traceRichStatusLabel

// Module 16419 (vibegrations/VibegrationsTraceFormat)
import intl6 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTraceFormat.tsx");

export const formatDuration = function formatDuration(arg0) {
  let combined;
  if (arg0 < 1000) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + arg0 + "ms";
  } else {
    const result = arg0 / 1000;
    const _HermesInternal = HermesInternal;
    combined = "" + result.toFixed(1) + "s";
  }
  return combined;
};
export const formatTokens = function formatTokens(promptTokens) {
  if (promptTokens < 1000) {
    const _String = String;
    return String(promptTokens);
  } else {
    let toFixedResult;
    const result = promptTokens / 1000;
    if (result < 10) {
      toFixedResult = result.toFixed(1);
    } else {
      const _Math = Math;
      toFixedResult = Math.round(result);
    }
    const _HermesInternal = HermesInternal;
    return "" + toFixedResult + "k";
  }
};
export const categoryLabel = function categoryLabel(traceCategoryResult) {
  if ("subagent" === traceCategoryResult) {
    const intl5 = intl6.intl;
    return intl5.string(_modDef3718["EoY7D+"]);
  } else if ("context" === traceCategoryResult) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3718.KVFrD3);
  } else if ("tool" === traceCategoryResult) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3718["/N6ZU9"]);
  } else if ("delegated" === traceCategoryResult) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3718.HcEbf2);
  } else {
    const intl = intl6.intl;
    return intl.string(_modDef3718.AhOqQs);
  }
};
export const statusLabel = function statusLabel(status) {
  if ("started" === status) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3718.HpKDyl);
  } else if ("error" === status) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3718["5T4Dd0"]);
  } else {
    const intl = intl6.intl;
    return intl.string(_modDef3718.VbEmf0);
  }
};
export const omissionLabel = function omissionLabel(content) {
  if ("prose" === content) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3718.xO6bcQ);
  } else if ("content" === content) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3718.gpBZRr);
  } else {
    const intl = intl6.intl;
    return intl.string(_modDef3718.OZvPXt);
  }
};
export const traceRichStatusLabel = function traceRichStatusLabel(vibegrationsTraceDetail) {
  let stringResult = null;
  if (null != vibegrationsTraceDetail) {
    stringResult = null;
    if ("loaded" !== vibegrationsTraceDetail.status) {
      stringResult = null;
      if ("forbidden" !== vibegrationsTraceDetail.status) {
        let fj5wM8;
        const intl = intl6.intl;
        const string = intl.string;
        if ("loading" === vibegrationsTraceDetail.status) {
          fj5wM8 = _modDef3718["vBF/0G"];
        } else if ("unavailable" === vibegrationsTraceDetail.status) {
          fj5wM8 = _modDef3718.jEQTot;
        } else {
          fj5wM8 = _modDef3718.fj5wM8;
        }
        stringResult = string(fj5wM8);
      }
    }
  }
  return stringResult;
};
