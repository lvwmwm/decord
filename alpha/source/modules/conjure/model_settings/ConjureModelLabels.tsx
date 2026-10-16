// Module ID: 11540
// Function ID: 11541
// Name: ConjureModelLabels
// Dependencies: [3865, 1128, 2]
// Exports: modelTierMessage, tierTooltip

// Module 11540 (ConjureModelLabels)
import intl2 from "intl" /* 1128 */;
import _modDef3865 from "module_3865" /* 3865 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export const modelTierMessage = function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3865["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef3865.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef3865.FxoUwB;
  } else {
    return null;
  }
};
export const tierTooltip = function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef3865["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef3865.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef3865.FxoUwB;
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
