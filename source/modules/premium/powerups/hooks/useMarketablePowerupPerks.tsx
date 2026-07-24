// Module ID: 12563
// Function ID: 97233
// Name: set
// Dependencies: [31, 4017, 4018, 4021, 566, 11636, 2]
// Exports: default

// Module 12563 (set)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import BoostedGuildTiers from "BoostedGuildTiers";
import set from "BoostedGuildTiers";

const require = arg1;
const GuildPowerupType = BoostedGuildTiers.GuildPowerupType;
let items = [...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(tmp2.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), require("VANITY_URL_POWERUP_SKU_ID").VANITY_URL_POWERUP_SKU_ID];
let set = new Set(items);
const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const stateForGuild = outer1_4.getStateForGuild(closure_0);
    let tmp2;
    if (null != stateForGuild) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (null != powerupCatalog) {
        tmp2 = powerupCatalog[outer1_5.PERK];
      }
    }
    return tmp2;
  });
  let tmp2 = stateFromStores(11636)(arg0);
  const dependencyMap = tmp2;
  const items1 = [stateFromStores, tmp2];
  return React.useMemo(() => {
    const items = [...null != stateFromStores ? stateFromStores : []];
    if (null != closure_2) {
      items.push(closure_2);
    }
    return items.filter((skuId) => !outer2_6.has(skuId.skuId));
  }, items1);
};
