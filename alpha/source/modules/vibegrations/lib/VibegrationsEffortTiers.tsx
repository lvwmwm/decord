// Module ID: 16553
// Function ID: 16554
// Name: VibegrationsEffortTiers
// Dependencies: [109, 16554, 1126, 3723, 2]
// Exports: vibegrationsCeilingSupportsFast, vibegrationsNormalizeFast, vibegrationsPickTierModel, vibegrationsTierDescription, vibegrationsTierLabel, vibegrationsTierModel, vibegrationsWithTier

// Module 16553 (VibegrationsEffortTiers)
import _modDef3723 from "module_3723" /* 3723 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16554 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let tmp2;
const intl2 = tmp2(1126);
let closure_2 = ["thinking"];
let closure_3 = ["fast"];
let obj = { simple: _modDef3723.Mo0a1m, balanced: _modDef3723.dkt78K, complex: _modDef3723.Ly6zYL };
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsEffortTiers.tsx");

export const vibegrationsTierLabel = function vibegrationsTierLabel(value) {
  let stringResult = value;
  obj = VibegrationsModelLabels;
  const modelTierMessageResult = obj.modelTierMessage(value);
  if (null != modelTierMessageResult) {
    const intl = intl2.intl;
    stringResult = intl.string(modelTierMessageResult);
  }
  return stringResult;
};
export const vibegrationsTierDescription = function vibegrationsTierDescription(tier) {
  const intl = intl2.intl;
  return intl.string(obj[tier]);
};
export const vibegrationsTierModel = function vibegrationsTierModel(settings, tiers, tier) {
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
};
export const vibegrationsWithTier = function vibegrationsWithTier(tier, tier2) {
  let tmp = tier;
  if (tier2 !== tier.tier) {
    const thinking = tier.thinking;
    obj = { tier: tier2 };
    const merged = Object.assign(_objectWithoutProperties(tier, closure_2));
    tmp = obj;
  }
  return tmp;
};
export const vibegrationsPickTierModel = function vibegrationsPickTierModel(settings, tier, arg2) {
  let obj2;
  obj = { models: obj2 };
  const merged = Object.assign(settings);
  obj2 = {};
  const merged1 = Object.assign(settings.models);
  obj2[tier] = arg2;
  return obj;
};
export const vibegrationsCeilingSupportsFast = function vibegrationsCeilingSupportsFast(settings, tiers, main) {
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
};
export const vibegrationsNormalizeFast = function vibegrationsNormalizeFast(vibegrationsWithTierResult) {
  const fast = vibegrationsWithTierResult.fast;
  const tmp = _objectWithoutProperties(vibegrationsWithTierResult, closure_3);
  let tmp2 = tmp;
  if (true === fast) {
    obj = { fast: true };
    const merged = Object.assign(tmp);
    tmp2 = obj;
  }
  return tmp2;
};
