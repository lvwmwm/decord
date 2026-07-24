// Module ID: 15037
// Function ID: 114531
// Name: useIsGuildThemePerkEnabled
// Dependencies: [1838, 4017, 653, 566, 4021, 2]
// Exports: default

// Module 15037 (useIsGuildThemePerkEnabled)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/premium/powerups/hooks/useIsGuildThemePerkEnabled.tsx");

export default function useIsGuildThemePerkEnabled(arg0) {
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose, _isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != callback;
    if (tmp) {
      const guild = outer1_2.getGuild(callback);
      let hasItem;
      if (null != guild) {
        const features = guild.features;
        hasItem = features.has(outer1_4.GUILD_THEME);
      }
      let tmp7 = true === hasItem;
      if (!tmp7) {
        const stateForGuild = outer1_3.getStateForGuild(callback);
        let tmp11;
        if (null != stateForGuild) {
          const unlockedPowerups = stateForGuild.unlockedPowerups;
          if (null != unlockedPowerups) {
            tmp11 = unlockedPowerups[callback(undefined, outer1_1[4]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
          }
        }
        tmp7 = null != tmp11;
      }
      tmp = tmp7;
    }
    return tmp;
  }, items1);
};
