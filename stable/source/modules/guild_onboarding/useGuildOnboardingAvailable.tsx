// Module ID: 7619
// Function ID: 7620
// Name: useGuildOnboardingAvailable
// Dependencies: [5075, 1072, 504, 2]
// Exports: default, isGuildOnboardingAvailable

// Module 7619 (useGuildOnboardingAvailable)
import Constants from "Constants" /* 1072 */;
import ImpersonateStore from "ImpersonateStore" /* 5075 */;
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
export function isGuildOnboardingAvailable(guild) {
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
}
