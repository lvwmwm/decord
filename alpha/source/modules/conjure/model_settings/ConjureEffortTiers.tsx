// Module ID: 13259
// Function ID: 13260
// Name: ConjureEffortTiers
// Dependencies: [109, 13260, 1113, 4131, 13261, 2]
// Exports: conjureCanPickModel, conjureCeilingSupportsFast, conjureNormalizeFast, conjurePickTierModel, conjureTierAvailable, conjureTierDescription, conjureTierLabel, conjureTierModel, conjureTierStopLabel, conjureWithTier

// Module 13259 (ConjureEffortTiers)
import _modDef4131 from "module_4131" /* 4131 */;
import ConjureModelLabels from "ConjureModelLabels" /* 13260 */;
import ConjureModelSettingsTypes from "ConjureModelSettingsTypes" /* 13261 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let tmp2;
const intl3 = tmp2(1113);
let closure_3 = ["thinking"];
let closure_4 = ["fast"];
let obj = { simple: _modDef4131.Mqb8mc, balanced: _modDef4131.zCZfA6, complex: _modDef4131["8l2atm"] };
const CONJURE_MODEL_TIERS = ConjureModelSettingsTypes.CONJURE_MODEL_TIERS;
const flatMapResult = CONJURE_MODEL_TIERS.flatMap((item, index) => {
  let items;
  if ("complex" !== item) {
    items = [];
  } else {
    items = [index];
  }
  return items;
});
const result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureEffortTiers.tsx");

export function conjureTierLabel(value) {
  let stringResult = value;
  obj = ConjureModelLabels;
  const modelTierMessageResult = obj.modelTierMessage(value);
  if (null != modelTierMessageResult) {
    const intl = intl3.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  return stringResult;
}
export function conjureTierDescription(tier) {
  const intl = intl3.intl;
  return intl.string(obj[tier]);
}
export function conjureTierModel(settings, tiers, tier) {
  const models = settings.models;
  let tmp;
  if (models != null) {
    tmp = models[tier];
  }
  if (tmp == null) {
    let model;
    if (tiers != null) {
      if (tiers[tier] != null) {
        model = tmp4.model;
      }
    }
    tmp = model;
  }
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
}
export function conjureWithTier(settings, tier2) {
  let tmp = settings;
  if (tier2 !== settings.tier) {
    const thinking = settings.thinking;
    obj = { tier: tier2 };
    const merged = Object.assign(_objectWithoutProperties(settings, closure_3));
    tmp = obj;
  }
  return tmp;
}
export function conjurePickTierModel(settings, tier, arg2) {
  let obj2;
  obj = { models: obj2 };
  const merged = Object.assign(settings);
  obj2 = {};
  const merged1 = Object.assign(settings.models);
  obj2[tier] = arg2;
  return obj;
}
export function conjureCeilingSupportsFast(settings, tiers, main) {
  let models;
  let tier;
  ({ tier, models } = settings);
  let tmp;
  if (models != null) {
    tmp = models[tier];
  }
  if (tmp == null) {
    let model;
    if (tiers != null) {
      if (tiers[tier] != null) {
        model = tmp4.model;
      }
    }
    tmp = model;
  }
  if (tmp == null) {
    tmp = null;
  }
  let c0 = tmp;
  let tmp5 = null != tmp;
  if (tmp5) {
    const found = main.find((id) => id.id === c0);
    let supports_fast;
    if (found != null) {
      supports_fast = found.supports_fast;
    }
    tmp5 = true === supports_fast;
  }
  return tmp5;
}
export function conjureNormalizeFast(conjurePickTierModelResult) {
  const fast = conjurePickTierModelResult.fast;
  const tmp = _objectWithoutProperties(conjurePickTierModelResult, closure_4);
  let tmp2 = tmp;
  if (true === fast) {
    obj = { fast: true };
    const merged = Object.assign(tmp);
    tmp2 = obj;
  }
  return tmp2;
}
export function conjureCanPickModel(choices) {
  return choices.main.length > 0;
}
export function conjureTierAvailable(value) {
  return "complex" !== value;
}
export const CONJURE_UNAVAILABLE_TIER_STOPS = flatMapResult;
export function conjureTierStopLabel(value) {
  obj = ConjureModelLabels;
  const modelTierMessageResult = obj.modelTierMessage(value);
  let stringResult = value;
  if (null != modelTierMessageResult) {
    const intl = tmp(1113).intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  let combined = stringResult;
  if ("complex" === value) {
    const intl2 = tmp(1113).intl;
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult + ", " + intl2.string(_modDef4131["17yEQw"]);
  }
  return combined;
}
