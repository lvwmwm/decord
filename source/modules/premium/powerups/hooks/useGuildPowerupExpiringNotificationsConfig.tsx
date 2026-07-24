// Module ID: 11617
// Function ID: 90311
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: [11618, 11619, 1212, 2620, 4021, 2230, 2]
// Exports: default

// Module 11617 (useGuildPowerupExpiringNotificationsConfig)
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let arr = importDefault(11618)(arg0);
  const arr2 = importDefault(11619)(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(importDefault(2620)["B3OfL/"]);
    }
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(arr.map((title) => title.title), 0);
    if (null != stringResult) {
      const items1 = [stringResult];
      let items2 = items1;
    } else {
      items2 = [];
    }
    arraySpreadResult = HermesBuiltin.arraySpread(items2, arraySpreadResult);
    const items3 = [];
    if (arr.some((skuId) => skuId.skuId === outer1_0(outer1_2[4]).VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      arr = items3.push(intl2.string(importDefault(2230).Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      arr = items3.push(intl3.string(importDefault(2620).wiungr));
    }
    let obj = { shouldShow: tmp, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj;
  } else {
    obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
};
