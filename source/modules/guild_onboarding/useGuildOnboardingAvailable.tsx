// Module ID: 5730
// Function ID: 49242
// Name: useGuildOnboardingAvailable
// Dependencies: [1909, 653, 566, 2]
// Exports: default, isGuildOnboardingAvailable

// Module 5730 (useGuildOnboardingAvailable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  const _require = features;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    let id;
    if (null != user) {
      id = user.id;
    }
    if (null == id) {
      return false;
    } else {
      return outer1_2.isFullServerPreview(user.id) && outer1_2.isOnboardingEnabled(user.id);
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
    let hasItem = _isNativeReflectConstruct.isFullServerPreview(guild.id) && _isNativeReflectConstruct.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
};
