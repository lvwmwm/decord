// Module ID: 12259
// Function ID: 12260
// Name: ConjureModelLabels
// Dependencies: [3863, 1125, 2]
// Exports: modelTierMessage, tierTooltip

// Module 12259 (ConjureModelLabels)
import intl2 from "intl" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelLabels.tsx");

export const modelTierMessage = function modelTierMessage(value) {
  if ("simple" === value) {
    return _modDef3863["/tlOR5"];
  } else if ("balanced" === value) {
    return _modDef3863.wNhuGQ;
  } else if ("complex" === value) {
    return _modDef3863.FxoUwB;
  } else {
    return null;
  }
};
export const tierTooltip = function tierTooltip(title, arg1) {
  let intl;
  let obj;
  let prop;
  if ("simple" === arg1) {
    prop = _modDef3863["/tlOR5"];
  } else if ("balanced" === arg1) {
    prop = _modDef3863.wNhuGQ;
  } else {
    prop = null;
    if ("complex" === arg1) {
      prop = _modDef3863.FxoUwB;
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
