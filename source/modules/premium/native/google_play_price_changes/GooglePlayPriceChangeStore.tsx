// Module ID: 15662
// Function ID: 120754
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3782, 653, 477, 566, 686, 2]

// Module 15662 (_isNativeReflectConstruct)
import ME from "ME";
import closure_3 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function onInitializeSync() {
  let priceChange = null;
  let c9 = false;
  if (obj.isAndroid()) {
    premiumSubscription = premiumSubscription.getPremiumSubscription();
    if (null != premiumSubscription) {
      priceChange = premiumSubscription.priceChange;
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
      c9 = true;
    }
  }
}
let items = [, , ];
({ ACTIVE: arr[0], PAST_DUE: arr[1], UNPAID: arr[2] } = require("ME").SubscriptionStatusTypes);
let set = new Set(items);
let c9 = false;
let c10 = null;
let tmp3 = ((Store) => {
  class GooglePlayPriceChangeStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GooglePlayPriceChangeStore);
      obj = outer1_5(GooglePlayPriceChangeStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GooglePlayPriceChangeStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_7];
      this.syncWith(items, outer1_12);
      this.waitFor(outer1_7);
    }
  };
  let items = [obj, , ];
  obj = {
    key: "shouldShowGooglePlayPriceChange",
    get() {
      return outer1_9;
    }
  };
  items[1] = obj;
  obj = {
    key: "priceChangeRecord",
    get() {
      return outer1_10;
    }
  };
  items[2] = obj;
  return callback(GooglePlayPriceChangeStore, items);
})(require("initialize").Store);
tmp3.displayName = "GooglePlayPriceChangeStore";
tmp3 = new tmp3(require("dispatcher"), {});
let result = set.fileFinishedImporting("modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx");

export default tmp3;
