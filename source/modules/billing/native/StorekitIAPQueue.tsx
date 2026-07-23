// Module ID: 7223
// Function ID: 58203
// Name: productSK2ToIAPProduct
// Dependencies: [5, 6, 7, 27, 3811, 5619, 7204, 2]

// Module 7223 (productSK2ToIAPProduct)
import CurrencyCodes from "CurrencyCodes";
import module_7204 from "module_7204";
import set from "set";
import { convertToAlpha2 } from "getCountryCodeByCountryName";

const require = arg1;
function productSK2ToIAPProduct(description) {
  let items = [];
  if (null != description.subscription.promotionalOffers) {
    const promotionalOffers = description.subscription.promotionalOffers;
    items = promotionalOffers.map((arg0) => outer1_8(arg0));
  }
  if (null != description.subscription.introductoryOffer) {
    items.push(promoOfferToDiscount(description.subscription.introductoryOffer));
  }
  const price = description.price;
  const NumberResult = Number(price.toFixed(require(5619) /* CurrencyCodes */.CurrencyExponents[description.currency.toLowerCase(description.currency)]));
  const obj = { identifier: String(description.id), price: NumberResult, currencySymbol: str2.split(/[0-9]/)[0], currencyCode: str3.toLowerCase(), priceString: String(NumberResult), countryCode: "", downloadable: false, description: description.description, title: description.displayName, discounts: items };
  return obj;
}
function promoOfferToDiscount(introductoryOffer) {
  const paymentMode = introductoryOffer.paymentMode;
  let str = "FREETRIAL";
  if ("freeTrial" !== paymentMode) {
    if ("payAsYouGo" === paymentMode) {
      str = "PAYASYOUGO";
    } else {
      str = "payUpFront" === paymentMode ? "PAYUPFRONT" : "";
    }
  }
  const obj = { identifier: introductoryOffer.id, type: "SUBSCRIPTION", numberOfPeriods: str4.toString(), price: str5.toString(), localizedPrice: introductoryOffer.displayPrice, paymentMode: str, subscriptionPeriod: introductoryOffer.period.unit.toUpperCase() };
  return obj;
}
const RNIapIosSk2 = require("get ActivityIndicator").NativeModules.RNIapIosSk2;
let tmp2 = (() => {
  class StorekitIAPQueueClass {
    constructor() {
      tmp = outer1_3(this, StorekitIAPQueueClass);
      this._queue = [];
      this._processingQueue = false;
      return;
    }
  }
  let obj = {
    key: "fetchSubscriptions",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      this.processQueue();
      return new Promise((arg0, arg1) => {
        const _self = arg0;
        let closure_1 = arg1;
        const _queue = _self._queue;
        _queue.push(outer2_2(async () => {
          const found = yield outer4_6.getItems(closure_1).filter((subscription) => null != subscription.subscription);
          outer1_0(found.map(outer4_7));
        }));
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "fetchProducts",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      this.processQueue();
      return new Promise((arg0, arg1) => {
        const _self = arg0;
        let closure_1 = arg1;
        const _queue = _self._queue;
        _queue.push(outer2_2(async () => {
          let obj = callback(StorekitIAPQueueClass[6]);
          obj = { skus: closure_1 };
          const products = obj.getProducts(obj);
          outer1_0(yield products.then((arr) => {
            const found = arr.filter(() => { ... });
            return found.map(() => { ... });
          }));
        }));
      });
    }
  };
  items[1] = obj;
  obj = { key: "processQueue" };
  let closure_0 = callback(async function() {
    const self = this;
    if (!self._processingQueue) {
      self._processingQueue = true;
      if (self._queue.length > 0) {
        const _queue = self._queue;
        yield _queue.shift()();
      }
      self._processingQueue = false;
    }
  });
  obj.value = function processQueue() {
    return callback(...arguments);
  };
  items[2] = obj;
  return callback2(StorekitIAPQueueClass, items);
})();
tmp2 = new tmp2();
const result = require("_defineProperties").fileFinishedImporting("modules/billing/native/StorekitIAPQueue.tsx");

export default tmp2;
