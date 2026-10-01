// Module ID: 6753
// Function ID: 6754
// Name: useGuildOnboardingAvailable
// Dependencies: [2101, 1074, 504, 2]
// Exports: default, isGuildOnboardingAvailable

// Module 6753 (useGuildOnboardingAvailable)
import Constants from "Constants" /* 1074 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/guild_onboarding/useGuildOnboardingAvailable.tsx");

export default function useGuildOnboardingAvailable(features) {
  _require = features;
  const items = [ImpersonateStore];
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    if (features != null) {
      id = tmp.id;
    }
    if (null == id) {
      return false;
    } else {
      const tmp4 = ImpersonateStore.isFullServerPreview(features.id) && ImpersonateStore.isOnboardingEnabled(features.id);
      return tmp4;
    }
  });
  if (!stateFromStores) {
    let hasItem;
    if (features != null) {
      features = features.features;
      let tmp4 = GuildFeatures;
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
