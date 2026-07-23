// Module ID: 11589
// Function ID: 90070
// Name: useGuildPowerupTier3OverrideConfig
// Dependencies: [1838, 653, 566, 1212, 2230, 2]
// Exports: default

// Module 11589 (useGuildPowerupTier3OverrideConfig)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  const _require = arg0;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  if (obj.useStateFromStores(items, () => {
    const guild = outer1_3.getGuild(closure_0);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_4.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    obj = { shouldShow: true };
    const intl = _require(1212).intl;
    obj.text = intl.string(importDefault(2230).l9n4QZ);
  } else {
    obj = { shouldShow: false, text: "" };
  }
  return obj;
};
