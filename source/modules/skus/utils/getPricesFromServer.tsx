// Module ID: 4171
// Function ID: 35398
// Name: getPricesFromServer
// Dependencies: [3777, 2]
// Exports: default

// Module 4171 (getPricesFromServer)
import { getPriceFromServer } from "_isNativeReflectConstruct";

const result = require("set").fileFinishedImporting("modules/skus/utils/getPricesFromServer.tsx");

export default function getPricesFromServer(arg0) {
  if (null == arg0) {
    let reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((arg0, arg1) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg1;
      let obj = {};
      obj = { countryCode: tmp2.country_prices.country_code, prices: prices.map((arg0) => outer2_0(arg0, true)) };
      prices = tmp2.country_prices.prices;
      obj.countryPrices = obj;
      obj.paymentSourcePrices = {};
      arg0[tmp] = obj;
      return arg0;
    }, {});
  }
  return reduced;
};
