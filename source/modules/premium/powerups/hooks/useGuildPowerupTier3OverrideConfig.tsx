// Module ID: 11774
// Function ID: 11775
// Name: useGuildPowerupTier3OverrideConfig
// Dependencies: [1910, 676, 589, 1236, 2368, 2]
// Exports: default

// Module 11774 (useGuildPowerupTier3OverrideConfig)
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import { GuildFeatures } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [closure_3];
  if (obj.useStateFromStores(items, () => {
    const guild = closure_1_3.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(closure_1_4.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    obj = { shouldShow: true, text: null };
    const intl = _require(1236).intl;
    obj[1] = intl.string(messagesProxyDefault.l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};
