// Module ID: 11579
// Function ID: 90011
// Name: useGuildPowerupExpiringNotificationsConfig
// Dependencies: []
// Exports: default

// Module 11579 (useGuildPowerupExpiringNotificationsConfig)
const _module = require(dependencyMap[6]);
const result = _module.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupExpiringNotificationsConfig.tsx");

export default function useGuildPowerupExpiringNotificationsConfig(arg0) {
  let arr = importDefault(dependencyMap[0])(arg0);
  const arr2 = importDefault(dependencyMap[1])(arg0);
  if (arr.length > 0 || arr2.length > 0) {
    let stringResult;
    if (arr2.length > 0) {
      const intl = require(dependencyMap[2]).intl;
      stringResult = intl.string(importDefault(dependencyMap[3]).B3OfL/);
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
    if (arr.some((skuId) => skuId.skuId === callback(closure_2[4]).VANITY_URL_POWERUP_SKU_ID)) {
      const intl2 = require(dependencyMap[2]).intl;
      arr = items3.push(intl2.string(importDefault(dependencyMap[5]).Sfr0Jw));
    }
    if (arr2.length > 0) {
      const intl3 = require(dependencyMap[2]).intl;
      arr = items3.push(intl3.string(importDefault(dependencyMap[3]).wiungr));
    }
    let obj = { shouldShow: tmp, expiringPowerups: arr, expiringPowerupNames: items, warnings: items3 };
    return obj;
  } else {
    obj = { shouldShow: false, expiringPowerups: [], expiringPowerupNames: [], warnings: [] };
    return obj;
  }
};
