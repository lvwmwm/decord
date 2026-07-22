// Module ID: 11556
// Function ID: 89929
// Name: useGuildPowerupCardFooterConfig
// Dependencies: []
// Exports: default

// Module 11556 (useGuildPowerupCardFooterConfig)
let GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP;
let closure_3 = importDefault(dependencyMap[0]);
({ GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP, GUILD_POWERUP_CONFIGURABLE_SKUS_MOBILE: closure_4, PowerupActiveStatusType: closure_5 } = arg1(dependencyMap[1]));
const GuildFeatures = arg1(dependencyMap[2]).GuildFeatures;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupCardFooterConfig.tsx");

export default function useGuildPowerupCardFooterConfig(arg0, skuId) {
  skuId = arg0;
  const tmp = importDefault(dependencyMap[3])(arg0, skuId);
  let obj = skuId(dependencyMap[4]);
  const items = [closure_3];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.GUILD_THEME);
    }
    return true === hasItem;
  }, items1);
  let tmp3 = skuId.skuId === skuId(dependencyMap[5]).GUILD_POWERUP_GUILD_THEME_SKU_ID;
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
    tmp5 = !importDefault(dependencyMap[6])(arg0, skuId, "GuildPowerupCardFooterAdmin");
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
