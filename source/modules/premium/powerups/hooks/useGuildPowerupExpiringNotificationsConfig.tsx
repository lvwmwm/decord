// Module ID: 11834
// Function ID: 11835
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: [11835, 11836, 1236, 2706, 4176, 2316, 2]
// Exports: default

// Module 11834 (useGuildPowerupExpiringNotificationsConfig)
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let arr = importDefault(11835)(arg0);
  const arr2 = importDefault(11836)(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = require(1236) /* getSystemLocale */.intl;
      stringResult = intl.string(tmp(2706)["B3OfL/"]);
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
    if (arr.some((skuId) => skuId.skuId === callback(table[4]).VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = require(1236) /* getSystemLocale */.intl;
      arr = items3.push(intl2.string(tmp(2316).Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = require(1236) /* getSystemLocale */.intl;
      arr = items3.push(intl3.string(tmp(2706).wiungr));
    }
    let obj = { shouldShow: null, expiringPowerups: null, expiringPowerupNames: null, warnings: null };
    obj[0] = tmp3;
    obj[1] = arr;
    obj[2] = items;
    obj[3] = items3;
    return obj;
  } else {
    obj = { shouldShow: false, expiringPowerups: null, expiringPowerupNames: null, warnings: null };
    obj[1] = [];
    obj[2] = [];
    obj[3] = [];
    return obj;
  }
};
