// Module ID: 13356
// Function ID: 13357
// Name: useGuildPowerupTier3OverrideConfig
// Dependencies: [4663, 1072, 504, 1113, 2755, 2]
// Exports: default

// Module 13356 (useGuildPowerupTier3OverrideConfig)
import Constants from "Constants" /* 1072 */;
import _modDef2755 from "module_2755" /* 2755 */;
import GuildStore from "GuildStore" /* 4663 */;
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
    const obj2 = { shouldShow: true, text: intl.string(_modDef2755.l9n4QZ) };
    intl = tmp(1113).intl;
    obj3 = obj2;
  } else {
    obj3 = { shouldShow: false, text: "" };
  }
  return obj3;
};
