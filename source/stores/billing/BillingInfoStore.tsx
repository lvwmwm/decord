// Module ID: 3778
// Function ID: 29235
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 653, 566, 686, 2]

// Module 3778 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { FallbackCurrencyCountry } from "ME";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function handlePaymentSourceCreateEnd() {
  let c11 = false;
}
function handlePaymentSourcesFetchEnd() {
  let c6;
}
function handleSubscriptionFetchEnd() {
  let c14 = false;
}
function handleSubscriptionUpdateStart() {
  let c15 = true;
}
function handleSubscriptionUpdateEnd() {
  let c15 = false;
}
let c11 = false;
let c12 = false;
let c13 = false;
let c14 = false;
let c15 = false;
let c16 = null;
let c17 = null;
let c18 = false;
let c19 = false;
let tmp2 = ((Store) => {
  class BillingInfoStore {
    constructor() {
      self = this;
      tmp = BillingInfoStore(this, BillingInfoStore);
      obj = outer1_3(BillingInfoStore);
      tmp2 = outer1_2;
      if (outer1_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(BillingInfoStore, Store);
  let obj = {
    key: "isBusy",
    get() {
      let tmp = outer1_11;
      if (!outer1_11) {
        tmp = outer1_12;
      }
      if (!tmp) {
        tmp = outer1_15;
      }
      if (!tmp) {
        tmp = outer1_13;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isUpdatingPaymentSource",
    get() {
      return outer1_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "isRemovingPaymentSource",
    get() {
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSyncing",
    get() {
      return this.isPaymentSourceFetching || this.isSubscriptionFetching;
    }
  };
  items[4] = {
    key: "isSubscriptionFetching",
    get() {
      return outer1_14;
    }
  };
  items[5] = {
    key: "isPaymentSourceFetching",
    get() {
      return null != outer1_6;
    }
  };
  items[6] = {
    key: "editSourceError",
    get() {
      return outer1_16;
    }
  };
  items[7] = {
    key: "removeSourceError",
    get() {
      return outer1_17;
    }
  };
  items[8] = {
    key: "ipCountryCodeLoaded",
    get() {
      return undefined !== outer1_7;
    }
  };
  items[9] = {
    key: "ipCountryCode",
    get() {
      return outer1_7;
    }
  };
  items[10] = {
    key: "ipCountryCodeRequest",
    get() {
      return outer1_8;
    }
  };
  items[11] = {
    key: "ipLocationLoaded",
    get() {
      return undefined !== outer1_9;
    }
  };
  items[12] = {
    key: "ipLocation",
    get() {
      return outer1_9;
    }
  };
  items[13] = {
    key: "ipLocationRequest",
    get() {
      return outer1_10;
    }
  };
  items[14] = {
    key: "ipLocationHasError",
    get() {
      return outer1_19;
    }
  };
  items[15] = {
    key: "ipCountryCodeWithFallback",
    get() {
      return null != outer1_7 ? outer1_7 : outer1_5;
    }
  };
  items[16] = {
    key: "ipCountryCodeHasError",
    get() {
      return outer1_18;
    }
  };
  items[17] = {
    key: "paymentSourcesFetchRequest",
    get() {
      return outer1_6;
    }
  };
  return callback(BillingInfoStore, items);
})(require("initialize").Store);
tmp2.displayName = "BillingInfoStore";
tmp2 = new tmp2(require("dispatcher"), {
  BILLING_PAYMENT_SOURCE_CREATE_START: function handlePaymentSourceCreateStart() {
    let c11 = true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceCreateEnd,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: handlePaymentSourceCreateEnd,
  STRIPE_TOKEN_FAILURE: handlePaymentSourceCreateEnd,
  BILLING_PAYMENT_SOURCE_REMOVE_START: function handlePaymentSourceRemoveStart() {
    let c13 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemoveSuccess() {
    let c13 = false;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function handlePaymentSourceRemoveFail(error) {
    let c13 = false;
    error = error.error;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function handleClearRemoveError() {
    let c17 = null;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_START: function handlePaymentSourceUpdateStart() {
    let c12 = true;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function handlePaymentSourceUpdateSuccess() {
    let c12 = false;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function handlePaymentSourceUpdateFail(error) {
    let c12 = false;
    error = error.error;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function handleClearUpdateError() {
    let c16 = null;
  },
  BILLING_PAYMENT_SOURCES_FETCH_START: function handlePaymentSourcesFetchStart(request) {
    request = request.request;
  },
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: handlePaymentSourcesFetchEnd,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: handlePaymentSourcesFetchEnd,
  BILLING_SUBSCRIPTION_FETCH_START: function handleSubscriptionFetchStart() {
    let c14 = true;
  },
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: handleSubscriptionFetchEnd,
  BILLING_SUBSCRIPTION_FETCH_FAIL: handleSubscriptionFetchEnd,
  BILLING_SUBSCRIPTION_UPDATE_START: handleSubscriptionUpdateStart,
  BILLING_SUBSCRIPTION_CANCEL_START: handleSubscriptionUpdateStart,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: handleSubscriptionUpdateEnd,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: handleSubscriptionUpdateEnd,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: handleSubscriptionUpdateEnd,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: handleSubscriptionUpdateEnd,
  BILLING_IP_COUNTRY_CODE_FETCH_START: function handleIpCountryCodeFetchStart(request) {
    request = request.request;
  },
  BILLING_SET_IP_COUNTRY_CODE: function handleSetIpCountryCode(countryCode) {
    countryCode = countryCode.countryCode;
  },
  BILLING_IP_COUNTRY_CODE_FAILURE: function handleIpCountryCodeFailure() {
    let c7 = null;
    let c18 = true;
  },
  BILLING_IP_LOCATION_FETCH_START: function handleIpLocationFetchStart(request) {
    request = request.request;
  },
  BILLING_SET_IP_LOCATION: function handleSetIpLocation(location) {
    location = location.location;
  },
  BILLING_IP_LOCATION_FAILURE: function handleIpLocationFailure() {
    let c9 = null;
    let c19 = true;
  },
  LOGOUT: function handleLogout() {
    let c6;
    let c8;
    let c7;
    let c18 = false;
    let c9;
    let c19 = false;
    let c10;
    let c17 = null;
    let c16 = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/billing/BillingInfoStore.tsx");

export default tmp2;
