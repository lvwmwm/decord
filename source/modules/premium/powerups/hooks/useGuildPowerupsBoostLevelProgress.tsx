// Module ID: 4054
// Function ID: 33808
// Name: useGuildPowerupBoostLevelProgress
// Dependencies: []
// Exports: default, getGuildPowerupBoostLevelProgress

// Module 4054 (useGuildPowerupBoostLevelProgress)
let closure_3 = importDefault(dependencyMap[0]);
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: closure_5, GuildFeatures: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  const arg1 = arg0;
  const tmp = importDefault(dependencyMap[2])(arg0);
  const items = [closure_3];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const guild = store.getGuild(arg0);
    let premiumTier;
    if (null != guild) {
      premiumTier = guild.premiumTier;
    }
    if (null == premiumTier) {
      premiumTier = constants.NONE;
    }
    return premiumTier;
  });
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_3];
  let num = 0;
  if (!obj2.useStateFromStores(items1, () => {
    const guild = store.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(obj.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = closure_4[stateFromStores];
  }
  return num + tmp.available;
};
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  let premiumTier;
  const guildPowerupsBoostCount = arg1(dependencyMap[2]).getGuildPowerupsBoostCount(id);
  const guild = guild.getGuild(id);
  if (null != guild) {
    premiumTier = guild.premiumTier;
  }
  if (null == premiumTier) {
    premiumTier = constants.NONE;
  }
  return closure_4[premiumTier] + guildPowerupsBoostCount.available;
};
