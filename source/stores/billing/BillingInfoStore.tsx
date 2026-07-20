// Module ID: 3776
// Function ID: 29224
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 3776 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handlePaymentSourceCreateEnd() {
  let closure_11 = false;
}
function handlePaymentSourcesFetchEnd() {
  let closure_6;
}
function handleSubscriptionFetchEnd() {
  let closure_14 = false;
}
function handleSubscriptionUpdateStart() {
  let closure_15 = true;
}
function handleSubscriptionUpdateEnd() {
  let closure_15 = false;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const FallbackCurrencyCountry = arg1(dependencyMap[5]).FallbackCurrencyCountry;
let closure_11 = false;
let closure_12 = false;
let closure_13 = false;
let closure_14 = false;
let closure_15 = false;
let closure_16 = null;
let closure_17 = null;
let closure_18 = false;
let closure_19 = false;
let tmp2 = (Store) => {
  class BillingInfoStore {
    constructor() {
      self = this;
      tmp = BillingInfoStore(this, BillingInfoStore);
      obj = closure_3(BillingInfoStore);
      tmp2 = closure_2;
      if (closure_20()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = BillingInfoStore;
  callback2(BillingInfoStore, Store);
  let obj = {
    key: "isBusy",
    get() {
      let tmp = closure_11;
      if (!closure_11) {
        tmp = closure_12;
      }
      if (!tmp) {
        tmp = closure_15;
      }
      if (!tmp) {
        tmp = closure_13;
      }
      return tmp;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isUpdatingPaymentSource",
    get() {
      return closure_12;
    }
  };
  items[1] = obj;
  obj = {
    key: "isRemovingPaymentSource",
    get() {
      return closure_13;
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
      return closure_14;
    }
  };
  items[5] = {
    key: "isPaymentSourceFetching",
    get() {
      return null != closure_6;
    }
  };
  items[6] = {
    key: "editSourceError",
    get() {
      return closure_16;
    }
  };
  items[7] = {
    key: "removeSourceError",
    get() {
      return closure_17;
    }
  };
  items[8] = {
    key: "ipCountryCodeLoaded",
    get() {
      return undefined !== closure_7;
    }
  };
  items[9] = {
    key: "ipCountryCode",
    get() {
      return closure_7;
    }
  };
  items[10] = {
    key: "ipCountryCodeRequest",
    get() {
      return closure_8;
    }
  };
  items[11] = {
    key: "ipLocationLoaded",
    get() {
      return undefined !== closure_9;
    }
  };
  items[12] = {
    key: "ipLocation",
    get() {
      return closure_9;
    }
  };
  items[13] = {
    key: "ipLocationRequest",
    get() {
      return closure_10;
    }
  };
  items[14] = {
    key: "ipLocationHasError",
    get() {
      return closure_19;
    }
  };
  items[15] = {
    key: "ipCountryCodeWithFallback",
    get() {
      return null != closure_7 ? closure_7 : closure_5;
    }
  };
  items[16] = {
    key: "ipCountryCodeHasError",
    get() {
      return closure_18;
    }
  };
  items[17] = {
    key: "paymentSourcesFetchRequest",
    get() {
      return closure_6;
    }
  };
  return callback(BillingInfoStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "BillingInfoStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  BILLING_PAYMENT_SOURCE_CREATE_START: function handlePaymentSourceCreateStart() {
    let closure_11 = true;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: handlePaymentSourceCreateEnd,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: handlePaymentSourceCreateEnd,
  STRIPE_TOKEN_FAILURE: handlePaymentSourceCreateEnd,
  BILLING_PAYMENT_SOURCE_REMOVE_START: function handlePaymentSourceRemoveStart() {
    let closure_13 = true;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function handlePaymentSourceRemoveSuccess() {
    let closure_13 = false;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function handlePaymentSourceRemoveFail(error) {
    let closure_13 = false;
    error = error.error;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function handleClearRemoveError() {
    let closure_17 = null;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_START: function handlePaymentSourceUpdateStart() {
    let closure_12 = true;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function handlePaymentSourceUpdateSuccess() {
    let closure_12 = false;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function handlePaymentSourceUpdateFail(error) {
    let closure_12 = false;
    error = error.error;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function handleClearUpdateError() {
    let closure_16 = null;
  },
  BILLING_PAYMENT_SOURCES_FETCH_START: function handlePaymentSourcesFetchStart(request) {
    request = request.request;
  },
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: handlePaymentSourcesFetchEnd,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: handlePaymentSourcesFetchEnd,
  BILLING_SUBSCRIPTION_FETCH_START: function handleSubscriptionFetchStart() {
    let closure_14 = true;
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
    let closure_7 = null;
    let closure_18 = true;
  },
  BILLING_IP_LOCATION_FETCH_START: function handleIpLocationFetchStart(request) {
    request = request.request;
  },
  BILLING_SET_IP_LOCATION: function handleSetIpLocation(location) {
    location = location.location;
  },
  BILLING_IP_LOCATION_FAILURE: function handleIpLocationFailure() {
    let closure_9 = null;
    let closure_19 = true;
  },
  LOGOUT: function handleLogout() {
    let closure_6;
    let closure_8;
    let closure_7;
    let closure_18 = false;
    let closure_9;
    let closure_19 = false;
    let closure_10;
    let closure_17 = null;
    let closure_16 = null;
  },
  CONNECTION_OPEN: function handleConnectionOpen(countryCode) {
    countryCode = countryCode.countryCode;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/billing/BillingInfoStore.tsx");

export default tmp2;
