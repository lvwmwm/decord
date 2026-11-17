// Module ID: 14490
// Function ID: 14491
// Name: ConjureModelLabels
// Dependencies: [4133, 1113, 2]
// Exports: modelTierMessage, tierTooltip

// Module 14490 (ConjureModelLabels)
import intl2 from "intl" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef4133["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef4133.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef4133.FxoUwB;
  } else {
    return null;
  }
}
export function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef4133["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef4133.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef4133.FxoUwB;
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
