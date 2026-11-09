// Module ID: 18550
// Function ID: 18551
// Name: useIsGuildThemePerkEnabled
// Dependencies: [5011, 5345, 1072, 504, 5349, 2]
// Exports: default

// Module 18550 (useIsGuildThemePerkEnabled)
import Constants from "Constants" /* 1072 */;
import Powerups from "Powerups" /* 5349 */;
import GuildStore from "GuildStore" /* 5011 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 5345 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildStore, GuildPowerupsStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
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
