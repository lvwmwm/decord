// Module ID: 12053
// Function ID: 12054
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: [12054, 12055, 1115, 2941, 4727, 2519, 2]
// Exports: default

// Module 12053 (useGuildPowerupExpiringNotificationsConfig)
import intl4 from "intl" /* 1115 */;
import _modDef2519 from "module_2519" /* 2519 */;
import _modDef2941 from "module_2941" /* 2941 */;
import Powerups from "Powerups" /* 4727 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 12054 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 12055 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  const arr = useGetExpiringGuildPowerupsDefault(arg0);
  const arr2 = useGameServerGetExpiringEntitlementsDefault(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let items2;
    let stringResult;
    if (arr2.length > 0) {
      const intl = intl4.intl;
      stringResult = intl.string(tmp2(2941)["B3OfL/"]);
    }
    const items = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(items, arr.map((title) => title.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items, items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((skuId) => skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID)) {
      const push = items3.push;
      const intl2 = intl4.intl;
      push(intl2.string(_modDef2519.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const push2 = items3.push;
      const intl3 = intl4.intl;
      push2(intl3.string(_modDef2941.wiungr));
    }
    return { shouldShow: arr.length > 0 || arr2.length > 0, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
  } else {
    return { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
  }
};
