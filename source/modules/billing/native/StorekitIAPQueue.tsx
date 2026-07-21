// Module ID: 7217
// Function ID: 58146
// Name: productSK2ToIAPProduct
// Dependencies: []

// Module 7217 (productSK2ToIAPProduct)
function productSK2ToIAPProduct(description) {
  let items = [];
  if (null != description.subscription.promotionalOffers) {
    const promotionalOffers = description.subscription.promotionalOffers;
    items = promotionalOffers.map((arg0) => callback(arg0));
  }
  if (null != description.subscription.introductoryOffer) {
    items.push(promoOfferToDiscount(description.subscription.introductoryOffer));
  }
  const price = description.price;
  const NumberResult = Number(price.toFixed(arg1(dependencyMap[5]).CurrencyExponents[description.currency.toLowerCase(description.currency)]));
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const convertToAlpha2 = arg1(dependencyMap[4]).convertToAlpha2;
const RNIapIosSk2 = arg1(dependencyMap[3]).NativeModules.RNIapIosSk2;
let tmp2 = () => {
  class StorekitIAPQueueClass {
    constructor() {
      tmp = closure_3(this, StorekitIAPQueueClass);
      this._queue = [];
      this._processingQueue = false;
      return;
    }
  }
  const dependencyMap = StorekitIAPQueueClass;
  let obj = {
    key: "fetchSubscriptions",
    value(arg0) {
      let closure_0 = this;
      const StorekitIAPQueueClass = arg0;
      this.processQueue();
      return new Promise((arg0, arg1) => {
        const self = arg0;
        arg0 = arg1;
        const _queue = self._queue;
        _queue.push(callback(async () => {
          const found = yield closure_6.getItems(closure_1).filter((subscription) => null != subscription.subscription);
          callback(found.map(closure_7));
        }));
      });
    }
  };
  const items = [obj, , ];
  obj = {
    key: "fetchProducts",
    value(arg0) {
      let closure_0 = this;
      const StorekitIAPQueueClass = arg0;
      this.processQueue();
      return new Promise((arg0, arg1) => {
        const self = arg0;
        arg0 = arg1;
        const _queue = self._queue;
        _queue.push(callback(async () => {
          let obj = callback(closure_1[6]);
          obj = { skus: closure_1 };
          const products = obj.getProducts(obj);
          callback(yield products.then((arr) => {
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
}();
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/billing/native/StorekitIAPQueue.tsx");

export default tmp2;
