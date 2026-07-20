// Module ID: 4163
// Function ID: 35307
// Name: getPricesFromServer
// Dependencies: []
// Exports: default

// Module 4163 (getPricesFromServer)
const getPriceFromServer = require(dependencyMap[0]).getPriceFromServer;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/skus/utils/getPricesFromServer.tsx");

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
      obj = { countryCode: tmp2.country_prices.country_code, prices: prices.map((arg0) => callback(arg0, true)) };
      const prices = tmp2.country_prices.prices;
      obj.countryPrices = obj;
      obj.paymentSourcePrices = {};
      arg0[tmp] = obj;
      return arg0;
    }, {});
  }
  return reduced;
};
