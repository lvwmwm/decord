// Module ID: 4567
// Function ID: 40051
// Name: useHasEnhancedRoleColors
// Dependencies: []
// Exports: default, getHasEnhancedRoleColors, getHasEnhancedRoleColorsForRole, useHasEnhancedRoleColorsForRole

// Module 4567 (useHasEnhancedRoleColors)
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx");

export default function useHasEnhancedRoleColors(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(constants.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export const getHasEnhancedRoleColors = function getHasEnhancedRoleColors(guildId, id) {
  if (null == guildId) {
    return false;
  } else {
    const guild = store.getGuild(guildId);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  }
};
export const useHasEnhancedRoleColorsForRole = function useHasEnhancedRoleColorsForRole(guildId, role) {
  role = guildId;
  const items = [closure_2];
  return role(dependencyMap[2]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem = null != guild;
    if (hasItem) {
      const features = guild.features;
      hasItem = features.has(constants.ENHANCED_ROLE_COLORS);
    }
    return hasItem;
  });
};
export const getHasEnhancedRoleColorsForRole = function getHasEnhancedRoleColorsForRole(id, role) {
  const guild = store.getGuild(id);
  let hasItem = null != guild;
  if (hasItem) {
    const features = guild.features;
    hasItem = features.has(GuildFeatures.ENHANCED_ROLE_COLORS);
  }
  return hasItem;
};
