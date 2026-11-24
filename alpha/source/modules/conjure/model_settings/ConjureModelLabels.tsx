// Module ID: 18383
// Function ID: 18384
// Name: ConjureModelLabels
// Dependencies: [4192, 1112, 2]
// Exports: modelTierMessage, tierTooltip

// Module 18383 (ConjureModelLabels)
import intl2 from "intl" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef4192["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef4192.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef4192.FxoUwB;
  } else {
    return null;
  }
}
export function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef4192["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef4192.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef4192.FxoUwB;
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
