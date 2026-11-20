// Module ID: 13327
// Function ID: 13328
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: [13328, 13329, 1112, 3213, 7881, 2757, 2]
// Exports: default

// Module 13327 (useGuildPowerupExpiringNotificationsConfig)
import intl4 from "intl" /* 1112 */;
import _modDef2757 from "module_2757" /* 2757 */;
import _modDef3213 from "module_3213" /* 3213 */;
import Powerups from "Powerups" /* 7881 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 13328 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 13329 */;
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
      stringResult = intl.string(tmp2(3213)["B3OfL/"]);
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
      push(intl2.string(_modDef2757.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const push2 = items3.push;
      const intl3 = intl4.intl;
      push2(intl3.string(_modDef3213.wiungr));
    }
    return { shouldShow: arr.length > 0 || arr2.length > 0, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
  } else {
    return { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
  }
};
