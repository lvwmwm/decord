// Module ID: 16248
// Function ID: 16249
// Name: VibegrationsModelLabels
// Dependencies: [3718, 1127, 2]
// Exports: modelTierMessage, tierTooltip

// Module 16248 (VibegrationsModelLabels)
import intl2 from "intl" /* 1127 */;
import _modDef3718 from "module_3718" /* 3718 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsModelLabels.tsx");

export const modelTierMessage = function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3718["5DOL2g"];
  } else if ("balanced" === value) {
    return _modDef3718["5I6PKl"];
  } else if ("complex" === value) {
    return _modDef3718.OJIfkn;
  } else {
    return null;
  }
};
export const tierTooltip = function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let v5DOL2g;
  if ("simple" === arg1) {
    v5DOL2g = _modDef3718["5DOL2g"];
  } else if ("balanced" === arg1) {
    v5DOL2g = _modDef3718["5I6PKl"];
  } else {
    v5DOL2g = null;
    if ("complex" === arg1) {
      v5DOL2g = _modDef3718.OJIfkn;
    }
  }
  if (null != v5DOL2g) {
    const obj2 = { title, body: intl.string(v5DOL2g) };
    intl = intl2.intl;
    obj = obj2;
  } else {
    obj = { body: title };
  }
  return obj;
};
export const THINKING_LABELS = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
export const PROVIDER_LABELS = { anthropic: "Anthropic", openai: "OpenAI", deepseek: "DeepSeek", xai: "xAI", moonshotai: "Moonshot AI" };
