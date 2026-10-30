// Module ID: 7429
// Function ID: 7430
// Name: CreatorMonetizationEligibilityExperimentUtils
// Dependencies: [1384, 2049, 1072, 504, 2]
// Exports: isExpeditedMonetizationOnboardingGuild, isRavenOnboardingGuild, isUserInCreatorMonetizationEligibleCountry, isWhitegloveOnboardingGuild, useIsExpeditedOnboardingGuild, useIsRavenOnboardingGuild, useIsUserInCreatorMonetizationEligibleCountry, useIsWhitegloveOnboardingGuild

// Module 7429 (CreatorMonetizationEligibilityExperimentUtils)
import get_initialized from "get initialized" /* 504 */;
import Constants from "Constants" /* 1072 */;
import UserStore from "UserStore" /* 1384 */;
import BillingInfoStore from "BillingInfoStore" /* 2049 */;
import size from "module_2" /* 2 */;

const GuildFeatures = Constants.GuildFeatures;
const set = new Set(["US"]);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx");

export function useIsUserInCreatorMonetizationEligibleCountry() {
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
}
export function isUserInCreatorMonetizationEligibleCountry() {
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
}
export function useIsRavenOnboardingGuild(arg0) {
  return null != arg0;
}
export function isRavenOnboardingGuild(arg0) {
  return null != arg0;
}
export function useIsWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
}
export function isWhitegloveOnboardingGuild(features) {
  let hasItem = null != features;
  if (hasItem) {
    features = features.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  return hasItem;
}
export function useIsExpeditedOnboardingGuild(stateFromStores) {
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp2 = null != id;
  let hasItem = null != stateFromStores;
  if (hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
  }
  if (!tmp2) {
    tmp2 = hasItem;
  }
  return tmp2;
}
export function isExpeditedMonetizationOnboardingGuild(id) {
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
}
