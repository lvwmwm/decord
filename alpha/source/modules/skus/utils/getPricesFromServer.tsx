// Module ID: 2047
// Function ID: 2048
// Name: getPricesFromServer
// Dependencies: [2048, 2]
// Exports: default

// Module 2047 (getPricesFromServer)
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 2048 */;
import size from "module_2" /* 2 */;

const getPriceFromServer = SubscriptionPlanRecord.getPriceFromServer;
const result = size.fileFinishedImporting("modules/skus/utils/getPricesFromServer.tsx");

export default function getPricesFromServer(arg0) {
  let reduced;
  if (null == arg0) {
    reduced = {};
  } else {
    const tmp = globalThis;
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((acc, item) => {
      let obj2;
      let prices;
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const obj = { countryPrices: obj2, paymentSourcePrices: {} };
      obj2 = { countryCode: tmp2.country_prices.country_code, prices: prices.map((item) => closure_1_0(item, true)) };
      prices = tmp2.country_prices.prices;
      acc[tmp] = obj;
      return acc;
    }, {});
  }
  return reduced;
};
