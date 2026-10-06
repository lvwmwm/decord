// Module ID: 16247
// Function ID: 16248
// Name: VibegrationsEffortTiers
// Dependencies: [109, 16248, 1127, 3718, 2]
// Exports: vibegrationsCeilingSupportsFast, vibegrationsNormalizeFast, vibegrationsPickTierModel, vibegrationsTierDescription, vibegrationsTierLabel, vibegrationsTierModel, vibegrationsWithTier

// Module 16247 (VibegrationsEffortTiers)
import _modDef3718 from "module_3718" /* 3718 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16248 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let tmp2;
const intl2 = tmp2(1127);
let closure_2 = ["thinking"];
let closure_3 = ["fast"];
let obj = { simple: _modDef3718.Mo0a1m, balanced: _modDef3718.dkt78K, complex: _modDef3718.Ly6zYL };
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
export const vibegrationsNormalizeFast = function vibegrationsNormalizeFast(vibegrationsWithTierResult, tiers, main) {
  let models;
  let tier;
  const fast = vibegrationsWithTierResult.fast;
  const tmp = _objectWithoutProperties(vibegrationsWithTierResult, closure_3);
  let tmp2 = tmp;
  if (true === fast) {
    ({ tier, models } = vibegrationsWithTierResult);
    let tmp3;
    if (models != null) {
      tmp3 = models[tier];
    }
    if (tmp3 == null) {
      let model;
      if (tiers != null) {
        if (tiers[tier] != null) {
          model = tmp6.model;
        }
      }
      tmp3 = model;
    }
    if (tmp3 == null) {
      tmp3 = null;
    }
    let c0 = tmp3;
    let tmp7 = null != tmp3;
    if (tmp7) {
      const tmp8 = main;
      const found = main.find((id) => id.id === c0);
      let supports_fast;
      if (found != null) {
        supports_fast = found.supports_fast;
      }
      tmp7 = true === supports_fast;
    }
    tmp2 = tmp;
    if (tmp7) {
      obj = { fast: true };
      const merged = Object.assign(tmp);
      tmp2 = obj;
    }
  }
  return tmp2;
};
