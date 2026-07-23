// Module ID: 11566
// Function ID: 89978
// Name: useGuildPowerupCardFooterConfig
// Dependencies: [1838, 4018, 653, 11531, 566, 4021, 11528, 2]
// Exports: default

// Module 11566 (useGuildPowerupCardFooterConfig)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import BoostedGuildTiers from "BoostedGuildTiers";
import { GuildFeatures } from "ME";

let GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
let closure_4;
let closure_5;
const require = arg1;
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4, PowerupActiveStatusType: closure_5 } = BoostedGuildTiers);
const result = require("ME").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  const _require = arg0;
  const tmp = importDefault(11531)(arg0, skuId);
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_6.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  let tmp3 = skuId.skuId === _require(4021).GUILD_POWERUP_GUILD_THEME_SKU_ID;
  let tmp4 = tmp.type !== constants.INACTIVE;
  if (!tmp4) {
    if (tmp3) {
      tmp3 = stateFromStores;
    }
    tmp4 = tmp3;
  }
  obj = {};
  let tmp5 = tmp4;
  if (!tmp4) {
    tmp5 = !importDefault(11528)(arg0, skuId, "GuildPowerupCardFooterAdmin");
  }
  if (tmp5) {
    tmp5 = tmp.type !== constants.TIER_OVERRIDE_ACTIVATED;
  }
  obj.showToggleButton = tmp5;
  let hasItem = tmp4;
  if (tmp4) {
    hasItem = set.has(skuId.skuId);
  }
  obj.showConfigureButton = hasItem;
  obj.isPowerupActive = tmp4;
  return obj;
};
