// Module ID: 14863
// Function ID: 111965
// Name: useIsGuildThemePerkEnabled
// Dependencies: []
// Exports: default

// Module 14863 (useIsGuildThemePerkEnabled)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  const items1 = [arg0];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp = null != arg0;
    if (tmp) {
      const guild = guild.getGuild(arg0);
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(constants.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = stateForGuild.getStateForGuild(arg0);
        let tmp11;
        if (null != stateForGuild) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (null != unlockedPowerups) {
            tmp11 = unlockedPowerups[closure_0(undefined, closure_1[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp11;
      }
      tmp = tmp7;
    }
    return tmp;
  }, items1);
};
