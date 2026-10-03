// Module ID: 16743
// Function ID: 16744
// Name: vibegrations/VibegrationsTraceFormat
// Dependencies: [1126, 3723, 2]
// Exports: categoryLabel, formatDuration, formatTokens, omissionLabel, statusLabel, traceRichStatusLabel

// Module 16743 (vibegrations/VibegrationsTraceFormat)
import intl6 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
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
    return intl5.string(_modDef3723["EoY7D+"]);
  } else if ("context" === traceCategoryResult) {
    const intl4 = intl6.intl;
    return intl4.string(_modDef3723.KVFrD3);
  } else if ("tool" === traceCategoryResult) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3723["/N6ZU9"]);
  } else if ("delegated" === traceCategoryResult) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3723.HcEbf2);
  } else {
    const intl = intl6.intl;
    return intl.string(_modDef3723.AhOqQs);
  }
};
export const statusLabel = function statusLabel(status) {
  if ("started" === status) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3723.HpKDyl);
  } else if ("error" === status) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3723["5T4Dd0"]);
  } else {
    const intl = intl6.intl;
    return intl.string(_modDef3723.VbEmf0);
  }
};
export const omissionLabel = function omissionLabel(content) {
  if ("prose" === content) {
    const intl3 = intl6.intl;
    return intl3.string(_modDef3723.xO6bcQ);
  } else if ("content" === content) {
    const intl2 = intl6.intl;
    return intl2.string(_modDef3723.gpBZRr);
  } else {
    const intl = intl6.intl;
    return intl.string(_modDef3723.OZvPXt);
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
          fj5wM8 = _modDef3723["vBF/0G"];
        } else if ("unavailable" === vibegrationsTraceDetail.status) {
          fj5wM8 = _modDef3723.jEQTot;
        } else {
          fj5wM8 = _modDef3723.fj5wM8;
        }
        stringResult = string(fj5wM8);
      }
    }
  }
  return stringResult;
};
