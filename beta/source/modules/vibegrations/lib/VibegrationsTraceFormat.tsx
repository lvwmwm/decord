// Module ID: 17076
// Function ID: 17077
// Name: vibegrations/VibegrationsTraceFormat
// Dependencies: [1119, 3682, 2]
// Exports: categoryLabel, formatDuration, formatTokens, omissionLabel, statusLabel, traceRichStatusLabel

// Module 17076 (vibegrations/VibegrationsTraceFormat)
import util from "util" /* 1119 */;
import _modDef3682 from "module_3682" /* 3682 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTraceFormat.tsx");

export const formatDuration = function formatDuration(arg0) {
  if (arg0 < 1000) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + arg0 + "ms";
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
    const result = promptTokens / 1000;
    if (result < 10) {
      let toFixedResult = result.toFixed(1);
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
    const intl5 = util.intl;
    return intl5.string(_modDef3682["EoY7D+"]);
  } else if ("context" === traceCategoryResult) {
    const intl4 = util.intl;
    return intl4.string(_modDef3682.KVFrD3);
  } else if ("tool" === traceCategoryResult) {
    const intl3 = util.intl;
    return intl3.string(_modDef3682["/N6ZU9"]);
  } else if ("delegated" === traceCategoryResult) {
    const intl2 = util.intl;
    return intl2.string(_modDef3682.HcEbf2);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3682.AhOqQs);
  }
};
export const statusLabel = function statusLabel(status) {
  if ("started" === status) {
    const intl3 = util.intl;
    return intl3.string(_modDef3682.HpKDyl);
  } else if ("error" === status) {
    const intl2 = util.intl;
    return intl2.string(_modDef3682["5T4Dd0"]);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3682.VbEmf0);
  }
};
export const omissionLabel = function omissionLabel(content) {
  if ("prose" === content) {
    const intl3 = util.intl;
    return intl3.string(_modDef3682.xO6bcQ);
  } else if ("content" === content) {
    const intl2 = util.intl;
    return intl2.string(_modDef3682.gpBZRr);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3682.OZvPXt);
  }
};
export const traceRichStatusLabel = function traceRichStatusLabel(vibegrationsTraceDetail) {
  let tmp = null;
  if (null != vibegrationsTraceDetail) {
    tmp = null;
    if ("loaded" !== vibegrationsTraceDetail.status) {
      tmp = null;
      if ("forbidden" !== vibegrationsTraceDetail.status) {
        let tmp5 = dependencyMap;
        const intl = util.intl;
        if ("loading" === vibegrationsTraceDetail.status) {
          tmp5 = _modDef3682;
          let fj5wM8 = tmp5["vBF/0G"];
        } else if ("unavailable" === vibegrationsTraceDetail.status) {
          fj5wM8 = _modDef3682.jEQTot;
        } else {
          fj5wM8 = _modDef3682.fj5wM8;
        }
        intl.string(fj5wM8);
      }
    }
  }
  return tmp;
};
