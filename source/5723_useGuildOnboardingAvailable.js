// Module ID: 5723
// Function ID: 49153
// Name: useGuildOnboardingAvailable
// Dependencies: []
// Exports: default, isGuildOnboardingAvailable

// Module 5723 (useGuildOnboardingAvailable)
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  const arg1 = features;
  const items = [closure_2];
  let stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => {
    let id;
    if (null != arg0) {
      id = arg0.id;
    }
    if (null == id) {
      return false;
    } else {
      return closure_2.isFullServerPreview(arg0.id) && closure_2.isOnboardingEnabled(arg0.id);
    }
  });
  if (!stateFromStores) {
    let hasItem;
    if (null != features) {
      features = features.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    stateFromStores = hasItem;
  }
  return stateFromStores;
};
export const isGuildOnboardingAvailable = function isGuildOnboardingAvailable(guild) {
  if (null == guild) {
    return false;
  } else {
    let hasItem = closure_2.isFullServerPreview(guild.id) && closure_2.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
};
