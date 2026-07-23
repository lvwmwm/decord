// Module ID: 4056
// Function ID: 33819
// Name: useGuildPowerupBoostLevelProgress
// Dependencies: [1838, 653, 4037, 566, 2]
// Exports: default, getGuildPowerupBoostLevelProgress

// Module 4056 (useGuildPowerupBoostLevelProgress)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: closure_5, GuildFeatures: closure_6 } = ME);
const result = require("useGuildAppliedBoostCount").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  const _require = arg0;
  const tmp = importDefault(4037)(arg0);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let premiumTier;
    if (null != guild) {
      premiumTier = guild.premiumTier;
    }
    if (null == premiumTier) {
      premiumTier = outer1_5.NONE;
    }
    return premiumTier;
  });
  const obj = _require(566);
  const items1 = [_createForOfIteratorHelperLoose];
  let num = 0;
  if (!obj2.useStateFromStores(items1, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_6.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = dependencyMap[stateFromStores];
  }
  return num + tmp.available;
};
export const getGuildPowerupBoostLevelProgress = function getGuildPowerupBoostLevelProgress(id) {
  let premiumTier;
  const guildPowerupsBoostCount = require(4037) /* useGuildAppliedBoostCount */.getGuildPowerupsBoostCount(id);
  guild = guild.getGuild(id);
  if (null != guild) {
    premiumTier = guild.premiumTier;
  }
  if (null == premiumTier) {
    premiumTier = constants.NONE;
  }
  return dependencyMap[premiumTier] + guildPowerupsBoostCount.available;
};
