// Module ID: 15498
// Function ID: 118259
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15498 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function onInitializeSync() {
  let closure_10 = null;
  let closure_9 = false;
  if (obj.isAndroid()) {
    const premiumSubscription = premiumSubscription.getPremiumSubscription();
    if (null != premiumSubscription) {
      const priceChange = premiumSubscription.priceChange;
    }
    let isPriceIncrease = null != premiumSubscription;
    if (isPriceIncrease) {
      isPriceIncrease = set.has(premiumSubscription.status);
    }
    if (isPriceIncrease) {
      isPriceIncrease = null != priceChange;
    }
    if (isPriceIncrease) {
      isPriceIncrease = priceChange.isInFuture;
    }
    if (isPriceIncrease) {
      isPriceIncrease = priceChange.isPriceIncrease;
    }
    if (isPriceIncrease) {
      closure_10 = priceChange;
      closure_9 = true;
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const items = [, , ];
({ ACTIVE: arr[0], PAST_DUE: arr[1], UNPAID: arr[2] } = arg1(dependencyMap[6]).SubscriptionStatusTypes);
const set = new Set(items);
let closure_9 = false;
let closure_10 = null;
let tmp3 = (Store) => {
  class GooglePlayPriceChangeStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GooglePlayPriceChangeStore);
      obj = closure_5(GooglePlayPriceChangeStore);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GooglePlayPriceChangeStore;
  callback2(GooglePlayPriceChangeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_7];
      this.syncWith(items, closure_12);
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "shouldShowGooglePlayPriceChange",
    get() {
      return closure_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "priceChangeRecord",
    get() {
      return closure_10;
    }
  };
  items[2] = obj;
  return callback(GooglePlayPriceChangeStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp3.displayName = "GooglePlayPriceChangeStore";
tmp3 = new tmp3(importDefault(dependencyMap[9]), {});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx");

export default tmp3;
