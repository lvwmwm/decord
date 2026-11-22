// Module ID: 13446
// Function ID: 13447
// Name: useGuildPowerupTier3OverrideConfig
// Dependencies: [4784, 1071, 504, 1112, 2856, 2]
// Exports: default

// Module 13446 (useGuildPowerupTier3OverrideConfig)
import Constants from "Constants" /* 1071 */;
import _modDef2856 from "module_2856" /* 2856 */;
import GuildStore from "GuildStore" /* 4784 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupTier3OverrideConfig.tsx");

export default function useGuildPowerupTier3OverrideConfig(arg0) {
  let closure_0;
  let intl;
  let obj3;
  _require = arg0;
  const items = [GuildStore];
  const obj = require("get initialized");
  const tmp = _require;
  if (obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.PREMIUM_TIER_3_OVERRIDE);
    }
    return true === hasItem;
  })) {
    const obj2 = { shouldShow: true, text: intl.string(_modDef2856.l9n4QZ) };
    intl = tmp(1112).intl;
    obj3 = obj2;
  } else {
    obj3 = { shouldShow: false, text: "" };
  }
  return obj3;
};
