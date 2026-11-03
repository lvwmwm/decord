// Module ID: 12304
// Function ID: 12305
// Name: ConjureModelLabels
// Dependencies: [3995, 1113, 2]
// Exports: modelTierMessage, tierTooltip

// Module 12304 (ConjureModelLabels)
import intl2 from "intl" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3995["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef3995.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef3995.FxoUwB;
  } else {
    return null;
  }
}
export function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef3995["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef3995.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef3995.FxoUwB;
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
