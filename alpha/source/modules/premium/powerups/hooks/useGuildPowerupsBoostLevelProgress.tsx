// Module ID: 9254
// Function ID: 9255
// Name: useGuildPowerupsBoostLevelProgress
// Dependencies: [5181, 1072, 9250, 504, 2]
// Exports: default, getGuildPowerupBoostLevelProgress

// Module 9254 (useGuildPowerupsBoostLevelProgress)
import useGuildPowerupsBoostCount from "useGuildPowerupsBoostCount" /* 9250 */;
import GuildStore from "GuildStore" /* 5181 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useGuildPowerupsBoostCountDefault = useGuildPowerupsBoostCount;
let _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ AppliedGuildBoostsRequiredForBoostedGuildTier: closure_4, BoostedGuildTiers: hasOwnProperty, GuildFeatures: metroRequire } = Constants);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupsBoostLevelProgress.tsx");

export default function useGuildPowerupBoostLevelProgress(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore];
  const tmp = useGuildPowerupsBoostCountDefault(arg0);
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier == null) {
      premiumTier = hasOwnProperty.NONE;
    }
    return premiumTier;
  });
  const items1 = [GuildStore];
  let num = 0;
  const obj2 = require("get initialized");
  if (!obj2.useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(metroRequire.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    num = closure_4[stateFromStores];
  }
  return num + tmp.available;
};
export function getGuildPowerupBoostLevelProgress(id) {
  const obj = useGuildPowerupsBoostCount;
  const guildPowerupsBoostCount = obj.getGuildPowerupsBoostCount(id);
  const guild = GuildStore.getGuild(id);
  let premiumTier;
  if (guild != null) {
    premiumTier = guild.premiumTier;
  }
  if (premiumTier == null) {
    premiumTier = hasOwnProperty.NONE;
  }
  return React3[premiumTier] + guildPowerupsBoostCount.available;
}
