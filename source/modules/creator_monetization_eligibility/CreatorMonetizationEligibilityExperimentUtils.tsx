// Module ID: 5642
// Function ID: 48254
// Name: getCreatorMonetizationEligibleCountry
// Dependencies: [1849, 3778, 653, 566, 2]
// Exports: isExpeditedMonetizationOnboardingGuild, isUserInCreatorMonetizationEligibleCountry, useIsExpeditedOnboardingGuild, useIsUserInCreatorMonetizationEligibleCountry

// Module 5642 (getCreatorMonetizationEligibleCountry)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";
import set from "ME";

const require = arg1;
function getCreatorMonetizationEligibleCountry() {
  currentUser = currentUser.getCurrentUser();
  let country;
  if (null != currentUser) {
    const storeCountry = currentUser.storeCountry;
    if (null != storeCountry) {
      country = storeCountry.country;
    }
  }
  if (null == country) {
    country = ipCountryCode.ipCountryCode;
  }
  return country;
}
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
let set = new Set(["US"]);
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx");

export const useIsUserInCreatorMonetizationEligibleCountry = function useIsUserInCreatorMonetizationEligibleCountry() {
  const items = [_isNativeReflectConstruct, closure_3];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const tmp = outer1_6();
    let hasItem = null != tmp;
    if (hasItem) {
      hasItem = outer1_5.has(tmp);
    }
    return hasItem;
  });
};
export const isUserInCreatorMonetizationEligibleCountry = function isUserInCreatorMonetizationEligibleCountry() {
  const tmp = getCreatorMonetizationEligibleCountry();
  let hasItem = null != tmp;
  if (hasItem) {
    hasItem = set.has(tmp);
  }
  return hasItem;
};
export { useIsRavenOnboardingGuild };
export { isRavenOnboardingGuild };
export { useIsWhitegloveOnboardingGuild };
export { isWhitegloveOnboardingGuild };
export const useIsExpeditedOnboardingGuild = function useIsExpeditedOnboardingGuild(stateFromStores) {
  let id;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  let tmpResult = useIsRavenOnboardingGuild(id);
  if (!tmpResult) {
    tmpResult = useIsWhitegloveOnboardingGuild(stateFromStores);
  }
  return tmpResult;
};
export const isExpeditedMonetizationOnboardingGuild = function isExpeditedMonetizationOnboardingGuild(id) {
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  let tmpResult = isRavenOnboardingGuild(id);
  if (!tmpResult) {
    tmpResult = isWhitegloveOnboardingGuild(id);
  }
  return tmpResult;
};
