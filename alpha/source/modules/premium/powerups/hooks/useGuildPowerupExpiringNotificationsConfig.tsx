// Module ID: 14116
// Function ID: 14117
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: [14117, 14118, 1113, 2996, 5233, 2570, 2]
// Exports: default

// Module 14116 (useGuildPowerupExpiringNotificationsConfig)
import intl4 from "intl" /* 1113 */;
import _modDef2570 from "module_2570" /* 2570 */;
import _modDef2996 from "module_2996" /* 2996 */;
import Powerups from "Powerups" /* 5233 */;
import useGetExpiringGuildPowerupsDefault from "useGetExpiringGuildPowerups" /* 14117 */;
import useGameServerGetExpiringEntitlementsDefault from "useGameServerGetExpiringEntitlements" /* 14118 */;
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
      stringResult = intl.string(tmp2(2996)["B3OfL/"]);
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
      push(intl2.string(_modDef2570.Sfr0Jw));
    }
    if (arr2.length > 0) {
      const push2 = items3.push;
      const intl3 = intl4.intl;
      push2(intl3.string(_modDef2996.wiungr));
    }
    return { shouldShow: arr.length > 0 || arr2.length > 0, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
  } else {
    return { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
  }
};
