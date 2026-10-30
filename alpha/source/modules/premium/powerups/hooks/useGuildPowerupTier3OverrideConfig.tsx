// Module ID: 14080
// Function ID: 14081
// Name: useGuildPowerupTier3OverrideConfig
// Dependencies: [4880, 1072, 504, 1114, 2569, 2]
// Exports: default

// Module 14080 (useGuildPowerupTier3OverrideConfig)
import Constants from "Constants" /* 1072 */;
import _modDef2569 from "module_2569" /* 2569 */;
import GuildStore from "GuildStore" /* 4880 */;
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
    const obj2 = { shouldShow: true, text: intl.string(_modDef2569.l9n4QZ) };
    intl = tmp(1114).intl;
    obj3 = obj2;
  } else {
    obj3 = { shouldShow: false, text: "" };
  }
  return obj3;
};
