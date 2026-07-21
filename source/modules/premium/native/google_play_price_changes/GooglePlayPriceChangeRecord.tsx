// Module ID: 3782
// Function ID: 29482
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3782 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const obj = { PRICE_CHANGE_MODE_UNSPECIFIED: "PRICE_CHANGE_MODE_UNSPECIFIED", PRICE_DECREASE: "PRICE_DECREASE", PRICE_INCREASE: "PRICE_INCREASE", OPT_OUT_PRICE_INCREASE: "OPT_OUT_PRICE_INCREASE" };
const tmp2 = (arg0) => {
  class GooglePlayPriceChangeRecord {
    constructor(arg0) {
      self = this;
      tmp = GooglePlayPriceChangeRecord(this, GooglePlayPriceChangeRecord);
      obj = closure_3(GooglePlayPriceChangeRecord);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ userId: tmp6.userId, subscriptionId: tmp6.subscriptionId, oldCurrency: tmp6.oldCurrency, oldPrice: tmp6.oldPrice, newCurrency: tmp6.newCurrency, newPrice: tmp6.newPrice, priceChangeMode: tmp6.priceChangeMode, expectedChargeTime: tmp6.expectedChargeTime, priceChangeId: tmp6.priceChangeId } = arg0);
      return tmp2Result;
    }
  }
  let closure_0 = GooglePlayPriceChangeRecord;
  callback2(GooglePlayPriceChangeRecord, arg0);
  let obj = {
    key: "isPriceIncrease",
    get() {
      let tmp = this.priceChangeMode === constants.PRICE_INCREASE;
      if (!tmp) {
        tmp = this.priceChangeMode === constants.OPT_OUT_PRICE_INCREASE;
      }
      return tmp;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "isOptOutPriceIncrease",
    get() {
      return this.priceChangeMode === constants.OPT_OUT_PRICE_INCREASE;
    }
  };
  items[1] = obj;
  obj = {
    key: "isPriceDecrease",
    get() {
      return this.priceChangeMode === constants.PRICE_DECREASE;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isInFuture",
    get() {
      return this.expectedChargeTime > new Date().toISOString();
    }
  };
  const items1 = [
    {
      key: "createFromServer",
      value(userId) {
        return new GooglePlayPriceChangeRecord({ userId: userId.user_id, subscriptionId: userId.subscription_id, oldCurrency: userId.old_currency, oldPrice: userId.old_price, newCurrency: userId.new_currency, newPrice: userId.new_price, priceChangeMode: userId.price_change_mode, expectedChargeTime: userId.expected_charge_time, priceChangeId: userId.price_change_id });
      }
    }
  ];
  return callback(GooglePlayPriceChangeRecord, items, items1);
}(importDefault(dependencyMap[5]));
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeRecord.tsx");

export default tmp2;
export const GooglePlayPriceChangeMode = obj;
export const GooglePlayPriceChangeRecord = tmp2;
