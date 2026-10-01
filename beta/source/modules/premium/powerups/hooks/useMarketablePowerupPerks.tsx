// Module ID: 13117
// Function ID: 13118
// Name: useMarketablePowerupPerks
// Dependencies: [19, 4723, 4724, 4727, 504, 12072, 4761, 2]
// Exports: default

// Module 13117 (useMarketablePowerupPerks)
import Powerups from "Powerups" /* 4727 */;
import react from "react" /* 19 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4723 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4724 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const GuildPowerupType = GuildPowerupsConstants.GuildPowerupType;
const GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET = GuildPowerupsConstants.GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET;
let items = [...Array.from(_module.GUILD_TAG_BADGE_PACKS_WAVE_ONE_SKU_ID_SET), ...Array.from(GUILD_TAG_BADGE_PACKS_WAVE_TWO_SKU_ID_SET), Powerups.VANITY_URL_POWERUP_SKU_ID];
let set = new Set(items);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useMarketablePowerupPerks.tsx");

export default function useMarketablePowerupPerks(guildId) {
  let closure_2;
  let memo;
  _require = guildId;
  let items = [memo];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stateForGuild = GuildPowerupsStore.getStateForGuild(guildId);
    let tmp2;
    if (stateForGuild != null) {
      const powerupCatalog = stateForGuild.powerupCatalog;
      if (powerupCatalog != null) {
        tmp2 = powerupCatalog[GuildPowerupType.PERK];
      }
    }
    return tmp2;
  });
  let tmp2 = stateFromStores(12072)(guildId);
  dependencyMap = tmp2;
  const obj2 = require("ServerThemeExperiment");
  const serverThemeRollbackEnabled = obj2.useServerThemeRollbackEnabled(guildId, "useMarketablePowerupPerks");
  let items1 = [serverThemeRollbackEnabled];
  memo = serverThemeRollbackEnabled.useMemo(() => {
    set = new Set(set);
    const tmp = serverThemeRollbackEnabled;
    if (tmp) {
      set.add(Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID);
    }
    return set;
  }, items1);
  const items2 = [stateFromStores, tmp2, memo];
  return serverThemeRollbackEnabled.useMemo(() => {
    let items = stateFromStores;
    if (stateFromStores == null) {
      items = [];
    }
    const items1 = [...items];
    if (null != closure_2) {
      items1.push(tmp);
    }
    return items1.filter((skuId) => !set.has(skuId.skuId));
  }, items2);
};
