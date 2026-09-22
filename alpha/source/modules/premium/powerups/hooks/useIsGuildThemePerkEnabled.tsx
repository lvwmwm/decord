// Module ID: 16509
// Function ID: 16510
// Name: useIsGuildThemePerkEnabled
// Dependencies: [2064, 4645, 1074, 504, 4649, 2]
// Exports: default

// Module 16509 (useIsGuildThemePerkEnabled)
import Powerups from "Powerups" /* 4649 */;
import GuildStore from "GuildStore" /* 2064 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4645 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  _require = arg0;
  const items = [GuildStore, GuildPowerupsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      const guild = GuildStore.getGuild(tmp);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = GuildPowerupsStore.getStateForGuild(tmp);
        let tmp10;
        if (stateForGuild != null) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (unlockedPowerups != null) {
            tmp10 = unlockedPowerups[Powerups.GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp10;
      }
      tmp2 = tmp7;
    }
    return tmp2;
  }, items1);
};
