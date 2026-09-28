// Module ID: 6753
// Function ID: 6754
// Name: useGuildOnboardingAvailable
// Dependencies: [2101, 1074, 504, 2]
// Exports: default, isGuildOnboardingAvailable

// Module 6753 (useGuildOnboardingAvailable)
import ImpersonateStore from "ImpersonateStore" /* 2101 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  _require = features;
  const items = [ImpersonateStore];
  let stateFromStores = require("initialize").useStateFromStores(items, () => {
    let id;
    if (closure_0 != null) {
      id = tmp.id;
    }
    if (null == id) {
      return false;
    } else {
      return ImpersonateStore.isFullServerPreview(tmp.id) && ImpersonateStore.isOnboardingEnabled(tmp.id);
    }
  });
  if (!stateFromStores) {
    let hasItem;
    if (features != null) {
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
    let hasItem = ImpersonateStore.isFullServerPreview(guild.id) && ImpersonateStore.isOnboardingEnabled(guild.id);
    if (!hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_ONBOARDING_HAS_PROMPTS);
    }
    return hasItem;
  }
};
