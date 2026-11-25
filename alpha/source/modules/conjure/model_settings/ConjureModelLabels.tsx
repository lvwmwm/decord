// Module ID: 18495
// Function ID: 18496
// Name: ConjureModelLabels
// Dependencies: [4244, 1112, 2]
// Exports: modelTierMessage, tierTooltip

// Module 18495 (ConjureModelLabels)
import intl2 from "intl" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef4244["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef4244.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef4244.FxoUwB;
  } else {
    return null;
  }
}
export function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef4244["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef4244.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef4244.FxoUwB;
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
}
export const THINKING_LABELS = { low: "Low", medium: "Medium", high: "High", xhigh: "Extra high", max: "Max" };
