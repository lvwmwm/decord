// Module ID: 11579
// Function ID: 90021
// Name: useGuildPowerupTier3OverrideConfig
// Dependencies: []
// Exports: default

// Module 11579 (useGuildPowerupTier3OverrideConfig)
let closure_3 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const arg1 = arg0;
  let obj = arg1(dependencyMap[2]);
  const items = [closure_3];
  if (obj.useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(obj.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    obj = { shouldShow: true };
    const intl = arg1(dependencyMap[3]).intl;
    obj.text = intl.string(importDefault(dependencyMap[4]).l9n4QZ);
  } else {
    obj = { icon: "EMBEDDED_ACTIVITY_SET_PROXY_TICKET_REFRESHING", right: null };
  }
  return obj;
};
