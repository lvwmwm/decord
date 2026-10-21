// Module ID: 11699
// Function ID: 11700
// Name: ConjureModelLabels
// Dependencies: [3830, 1128, 2]
// Exports: modelTierMessage, tierTooltip

// Module 11699 (ConjureModelLabels)
import intl2 from "intl" /* 1128 */;
import _modDef3830 from "module_3830" /* 3830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export const modelTierMessage = function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3830["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef3830.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef3830.FxoUwB;
  } else {
    return null;
  }
};
export const tierTooltip = function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef3830["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef3830.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef3830.FxoUwB;
    }
  }
  if (null != prop) {
    const obj2 = { title, body: intl.string(prop) };
    intl = intl2.intl;
    obj = obj2;
  } else {
    obj = { body: title };
  }
  return obj;
};
export const THINKING_LABELS = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
export const PROVIDER_LABELS = { anthropic: "Anthropic", openai: "OpenAI", deepseek: "DeepSeek", xai: "xAI", moonshotai: "Moonshot AI" };
