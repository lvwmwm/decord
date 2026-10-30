// Module ID: 6035
// Function ID: 6036
// Name: useHasEnhancedRoleColors
// Dependencies: [4880, 1072, 504, 2]
// Exports: default, getHasEnhancedRoleColors, getHasEnhancedRoleColorsForRole, useHasEnhancedRoleColorsForRole

// Module 6035 (useHasEnhancedRoleColors)
import Constants from "Constants" /* 1072 */;
import GuildStore from "GuildStore" /* 4880 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default function useHasEnhancedRoleColors(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export function getHasEnhancedRoleColors(guildId1) {
  if (null == guildId1) {
    return false;
  } else {
    const guild = GuildStore.getGuild(guildId1);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  }
}
export function useHasEnhancedRoleColorsForRole(guildId) {
  _require = guildId;
  const items = [GuildStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
}
export function getHasEnhancedRoleColorsForRole(id) {
  const guild = GuildStore.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
}
