// Module ID: 5638
// Function ID: 48201
// Name: getCreatorMonetizationEligibleCountry
// Dependencies: []
// Exports: isExpeditedMonetizationOnboardingGuild, isUserInCreatorMonetizationEligibleCountry, useIsExpeditedOnboardingGuild, useIsUserInCreatorMonetizationEligibleCountry

// Module 5638 (getCreatorMonetizationEligibleCountry)
function getCreatorMonetizationEligibleCountry() {
  const currentUser = currentUser.getCurrentUser();
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const set = new Set([]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx");

export const useIsUserInCreatorMonetizationEligibleCountry = function useIsUserInCreatorMonetizationEligibleCountry() {
  const items = [closure_2, closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const tmp = callback();
    let hasItem = null != tmp;
    if (hasItem) {
      hasItem = set.has(tmp);
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
