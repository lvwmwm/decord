// Module ID: 14325
// Function ID: 14326
// Name: useGuildPowerupCardFooterConfig
// Dependencies: [5012, 5354, 1072, 14294, 504, 5357, 14290, 2]
// Exports: default

// Module 14325 (useGuildPowerupCardFooterConfig)
import Constants from "Constants" /* 1072 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 14294 */;
import GuildStore from "GuildStore" /* 5012 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 5354 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
let closure_4;
let hasOwnProperty;
let tmp;
const useGuildPowerupRollbackEnabledDefault = tmp(14290);
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4, PowerupActiveStatusType: hasOwnProperty } = GuildPowerupsConstants);
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  let closure_0;
  let hasItem;
  _require = arg0;
  const tmp3 = usePowerupActiveStatusDefault(arg0, skuId);
  const items = [GuildStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  skuId = skuId.skuId;
  let tmp6 = tmp3.type !== constants.INACTIVE;
  const tmp5 = constants;
  if (!tmp6) {
    tmp6 = skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
    skuId === require("Powerups").GUILD_POWERUP_GUILD_THEME_SKU_ID && stateFromStores;
  }
  const obj2 = { showToggleButton: (tmp6 || !useGuildPowerupRollbackEnabledDefault(arg0, skuId, "GuildPowerupCardFooterAdmin")) && tmp3.type !== tmp5.TIER_OVERRIDE_ACTIVATED, showConfigureButton: hasItem, isPowerupActive: tmp6 };
  hasItem = tmp6 && set.has(skuId.skuId);
  return obj2;
};
