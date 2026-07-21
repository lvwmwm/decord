// Module ID: 3775
// Function ID: 29213
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: isNoneSubscription

// Module 3775 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getPriceFromServer(amount, taxInclusive) {
  return { amount: amount.amount, currency: amount.currency, tax: 0, taxInclusive };
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ PremiumSubscriptionSKUs: closure_5, PremiumTypes: closure_6, SubscriptionPlans: closure_7 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
const tmp4 = (importDefaultResult) => {
  class SubscriptionPlanRecord {
    constructor(arg0) {
      self = this;
      tmp = SubscriptionPlanRecord(this, SubscriptionPlanRecord);
      obj = closure_3(SubscriptionPlanRecord);
      tmp2 = closure_2;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ id: tmp6.id, name: tmp6.name, interval: tmp6.interval, intervalCount: tmp6.intervalCount, taxInclusive: tmp6.taxInclusive, skuId: tmp6.skuId, currency: tmp6.currency, price: tmp6.price, prices: tmp6.prices } = importDefaultResult);
      return tmp2Result;
    }
  }
  let closure_0 = SubscriptionPlanRecord;
  callback2(SubscriptionPlanRecord, importDefaultResult);
  let obj = {
    key: "premiumSubscriptionType",
    get() {
      const skuId = this.skuId;
      if (closure_5.LEGACY !== skuId) {
        if (closure_5.TIER_2 !== skuId) {
          if (closure_5.TIER_1 === skuId) {
            return closure_6.TIER_1;
          } else if (closure_5.TIER_0 === skuId) {
            return closure_6.TIER_0;
          } else {
            return null;
          }
        }
      }
      return closure_6.TIER_2;
    }
  };
  const items = [obj, ];
  obj = {
    key: "toServerData",
    value() {
      const SubscriptionPlanRecord = this;
      let obj = {};
      const keys = Object.keys(this.prices);
      const item = keys.forEach((arg0) => {
        let obj = { country_prices: obj, payment_source_prices: tmp.paymentSourcePrices };
        obj = { country_code: tmp.countryPrices.countryCode, prices: tmp.countryPrices.prices };
        obj[arg0] = obj;
      });
      obj = { id: this.id, name: this.name, sku_id: this.skuId, interval: this.interval, interval_count: this.intervalCount, tax_inclusive: this.taxInclusive, currency: this.currency, price: this.price, prices: obj, price_tier: this.price };
      return obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "createFromServer",
    value(id) {
      const SubscriptionPlanRecord = id;
      if (null != id.prices) {
        const _Object = Object;
        const keys = Object.keys(id.prices);
        const reduced = keys.reduce((arg0, arg1) => {
          if (null == arg0.prices) {
            return arg0;
          } else {
            let obj = {};
            obj = { countryCode: arg0.prices[arg1].country_prices.country_code };
            const prices = tmp2.country_prices.prices;
            obj.prices = prices.map((arg0) => callback(arg0, tax_inclusive.tax_inclusive));
            obj.countryPrices = obj;
            const _Object = Object;
            const entries = Object.entries(tmp2.payment_source_prices);
            obj.paymentSourcePrices = entries.reduce((arg0, arg1) => {
              let arr;
              let tmp;
              [tmp, arr] = arg1;
              arg0[tmp] = arr.map((arg0) => callback(arg0, tax_inclusive.tax_inclusive));
              return arg0;
            }, {});
            arg0[arg1] = obj;
            return arg0;
          }
        }, {});
      }
      const obj = { id: id.id, name: id.name, interval: id.interval, intervalCount: id.interval_count, taxInclusive: id.tax_inclusive, skuId: id.sku_id, currency: id.currency, price: id.price, prices: {} };
      return new SubscriptionPlanRecord(obj);
    }
  };
  const items1 = [obj];
  return callback(SubscriptionPlanRecord, items, items1);
}(importDefaultResult);
const result = arg1(dependencyMap[7]).fileFinishedImporting("records/SubscriptionPlanRecord.tsx");

export default tmp4;
export { getPriceFromServer };
export const isNoneSubscription = function isNoneSubscription(planId) {
  const items = [, , , ];
  ({ NONE_MONTH: arr[0], NONE_3_MONTH: arr[1], NONE_6_MONTH: arr[2], NONE_YEAR: arr[3] } = closure_7);
  return items.includes(planId);
};
