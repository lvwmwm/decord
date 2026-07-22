// Module ID: 12396
// Function ID: 94753
// Name: set
// Dependencies: []
// Exports: default

// Module 12396 (set)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const tmp2 = arg1(dependencyMap[2]);
const GuildPowerupType = tmp2.GuildPowerupType;
const items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), arg1(dependencyMap[3]).VANITY_URL_POWERUP_SKU_ID];
const set = new Set(items);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, () => {
    const stateForGuild = stateForGuild.getStateForGuild(arg0);
    let tmp2;
    if (null != stateForGuild) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (null != powerupCatalog) {
        tmp2 = powerupCatalog[closure_5.PERK];
      }
    }
    return tmp2;
  });
  const importDefault = stateFromStores;
  const tmp2 = importDefault(dependencyMap[5])(arg0);
  const dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return React.useMemo(() => {
    const items = [...null != stateFromStores ? stateFromStores : []];
    if (null != tmp2) {
      items.push(tmp2);
    }
    return items.filter((skuId) => !set.has(skuId.skuId));
  }, items1);
};
