// Module ID: 6950
// Function ID: 6951
// Name: CreatorMonetizationEligibilityExperimentUtils
// Dependencies: [1389, 4728, 1085, 558, 576, 504, 2]
// Exports: isExpeditedMonetizationOnboardingGuild, isRavenOnboardingGuild, isUserInCreatorMonetizationEligibleCountry, isWhitegloveOnboardingGuild, useIsRavenOnboardingGuild, useIsWhitegloveOnboardingGuild

// Module 6950 (CreatorMonetizationEligibilityExperimentUtils)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import UserStore from "UserStore" /* 1389 */;
import BillingInfoStore from "BillingInfoStore" /* 4728 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const get_initialized = tmp(504);
const GuildFeatures = Constants.GuildFeatures;
const set = new Set(["US"]);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsUserInCreatorMonetizationEligibleCountry() {
  let ipCountryCode;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, BillingInfoStore];
    const fn = function l() {
      currentUser = currentUser.getCurrentUser();
      let country;
      if (currentUser != null) {
        const storeCountry = currentUser.storeCountry;
        if (storeCountry != null) {
          country = storeCountry.country;
        }
      }
      if (country == null) {
        country = ipCountryCode.ipCountryCode;
      }
      const hasItem = null != country && set.has(country);
      return hasItem;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (function useIsUserInCreatorMonetizationEligibleCountry() {
  let ipCountryCode;
  const items = [UserStore, BillingInfoStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let country;
    if (currentUser != null) {
      const storeCountry = currentUser.storeCountry;
      if (storeCountry != null) {
        country = storeCountry.country;
      }
    }
    if (country == null) {
      country = ipCountryCode.ipCountryCode;
    }
    const hasItem = null != country && set.has(country);
    return hasItem;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsExpeditedOnboardingGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp2 = null != id;
  let hasItem = null != id;
  if (hasItem) {
    const features = id.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  if (!tmp2) {
    tmp2 = hasItem;
  }
  return tmp2;
}) : (function useIsExpeditedOnboardingGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp2 = null != id;
  let hasItem = null != id;
  if (hasItem) {
    const features = id.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  if (!tmp2) {
    tmp2 = hasItem;
  }
  return tmp2;
});
function useIsRavenOnboardingGuild(arg0) {
  return null != arg0;
}
function isRavenOnboardingGuild(arg0) {
  return null != arg0;
}
function useIsWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
}
function isWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
}
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx");

export const useIsUserInCreatorMonetizationEligibleCountry = tmp3;
export const isUserInCreatorMonetizationEligibleCountry = function isUserInCreatorMonetizationEligibleCountry() {
  const currentUser = UserStore.getCurrentUser();
  let country;
  if (currentUser != null) {
    const storeCountry = currentUser.storeCountry;
    if (storeCountry != null) {
      country = storeCountry.country;
    }
  }
  if (country == null) {
    country = BillingInfoStore.ipCountryCode;
  }
  const hasItem = null != country && set.has(country);
  return hasItem;
};
export { useIsRavenOnboardingGuild };
export { isRavenOnboardingGuild };
export { useIsWhitegloveOnboardingGuild };
export { isWhitegloveOnboardingGuild };
export const useIsExpeditedOnboardingGuild = tmp4;
export const isExpeditedMonetizationOnboardingGuild = function isExpeditedMonetizationOnboardingGuild(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  let tmp2 = null != id;
  if (!tmp2) {
    let hasItem = null != id;
    if (hasItem) {
      const features = id.features;
      hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    }
    tmp2 = hasItem;
  }
  return tmp2;
};
