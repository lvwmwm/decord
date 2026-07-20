// Module ID: 8712
// Function ID: 68937
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 8712 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let tmp2 = (Store) => {
  class VirtualCurrencyStore {
    constructor() {
      self = this;
      tmp = closure_2(this, VirtualCurrencyStore);
      items = [, ];
      items[0] = VirtualCurrencyStore(closure_1[5]);
      items[1] = {
        VIRTUAL_CURRENCY_REDEEM_START(arg0) {
              return tmp2Result.handleRedeemVirtualCurrencyStart(arg0);
            },
        VIRTUAL_CURRENCY_REDEEM_SUCCESS(arg0) {
              return tmp2Result.handleRedeemVirtualCurrencySuccess(arg0);
            },
        VIRTUAL_CURRENCY_REDEEM_FAIL(arg0) {
              return tmp2Result.handleRedeemVirtualCurrencyFail(arg0);
            },
        VIRTUAL_CURRENCY_BALANCE_FETCH(arg0) {
              return tmp2Result.handleBalanceFetch(arg0);
            },
        VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS(arg0) {
              return tmp2Result.handleBalanceFetchSuccess(arg0);
            },
        VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL(arg0) {
              return tmp2Result.handleBalanceFetchFail(arg0);
            },
        VIRTUAL_CURRENCY_BALANCE_UPDATE(currency) {
              return tmp2Result.handleBalanceUpdate(currency);
            },
        VIRTUAL_CURRENCY_ONBOARDING_MODAL_OPEN(arg0) {
              return tmp2Result.handleOnboardingModalOpen(arg0);
            },
        VIRTUAL_CURRENCY_ONBOARDING_MODAL_RESET(arg0) {
              return tmp2Result.handleOnboardingModalReset(arg0);
            },
        LOGIN_SUCCESS() {
              return tmp2Result.handleBalanceStateReset();
            },
        VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY(balancePillOverlay) {
              const result = tmp2Result.setBalancePillOverlay(balancePillOverlay.balancePillOverlay);
            }
      };
      obj = closure_5(VirtualCurrencyStore);
      tmp2 = closure_4;
      if (closure_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      VirtualCurrencyStore = tmp2Result;
      tmp2Result._entitlements = null;
      tmp2Result._redeemingSkuId = null;
      tmp2Result._isRedeemingVirtualCurrency = false;
      tmp2Result._redeemVirtualCurrencyError = null;
      tmp2Result._balance = null;
      tmp2Result._fetchBalanceError = null;
      tmp2Result._isFetchingBalance = false;
      tmp2Result._onboardingModalOpenedPrior = false;
      tmp2Result._balancePillOverlay = false;
      return tmp2Result;
    }
  }
  const importDefault = VirtualCurrencyStore;
  callback2(VirtualCurrencyStore, Store);
  let obj = {
    key: "redeemError",
    get() {
      return this._redeemVirtualCurrencyError;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "isRedeeming",
    get() {
      return this._isRedeemingVirtualCurrency;
    }
  };
  items[1] = obj;
  obj = {
    key: "redeemingSkuId",
    get() {
      return this._redeemingSkuId;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "entitlements",
    get() {
      return this._entitlements;
    }
  };
  items[4] = {
    key: "balance",
    get() {
      return this._balance;
    }
  };
  items[5] = {
    key: "fetchBalanceError",
    get() {
      return this._fetchBalanceError;
    }
  };
  items[6] = {
    key: "isFetchingBalance",
    get() {
      return this._isFetchingBalance;
    }
  };
  items[7] = {
    key: "onboardingModalOpenedPrior",
    get() {
      return this._onboardingModalOpenedPrior;
    }
  };
  items[8] = {
    key: "balancePillOverlay",
    get() {
      return this._balancePillOverlay;
    }
  };
  items[9] = {
    key: "setBalancePillOverlay",
    value(_balancePillOverlay) {
      this._balancePillOverlay = _balancePillOverlay;
    }
  };
  items[10] = {
    key: "getCurrentBalance",
    value() {
      return this.balance;
    }
  };
  items[11] = {
    key: "handleBalanceStateReset",
    value() {
      this._balance = null;
      this._fetchBalanceError = null;
      this._isFetchingBalance = false;
    }
  };
  items[12] = {
    key: "handleBalanceFetch",
    value(arg0) {
      const self = this;
      if (arg0 == null) {
        HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
        throw undefined;
      } else {
        self._isFetchingBalance = true;
        self._fetchBalanceError = null;
      }
    }
  };
  items[13] = {
    key: "handleBalanceFetchSuccess",
    value(balance) {
      this._isFetchingBalance = false;
      this._balance = balance.balance;
    }
  };
  items[14] = {
    key: "handleBalanceFetchFail",
    value(error) {
      this._isFetchingBalance = false;
      this._fetchBalanceError = error.error;
    }
  };
  items[15] = {
    key: "handleBalanceUpdate",
    value(balance) {
      this._balance = balance.balance;
    }
  };
  items[16] = {
    key: "handleRedeemVirtualCurrencyStart",
    value(skuId) {
      this._entitlements = null;
      this._redeemingSkuId = skuId.skuId;
      this._redeemVirtualCurrencyError = null;
      this._isRedeemingVirtualCurrency = true;
    }
  };
  items[17] = {
    key: "handleRedeemVirtualCurrencySuccess",
    value(entitlements) {
      this._entitlements = entitlements.entitlements;
      this._redeemingSkuId = null;
      this._isRedeemingVirtualCurrency = false;
    }
  };
  items[18] = {
    key: "handleRedeemVirtualCurrencyFail",
    value(error) {
      this._entitlements = null;
      this._redeemVirtualCurrencyError = error.error;
      this._redeemingSkuId = null;
      this._isRedeemingVirtualCurrency = false;
    }
  };
  items[19] = {
    key: "handleOnboardingModalOpen",
    value(arg0) {
      if (arg0 == null) {
        HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
        throw undefined;
      } else {
        const self = this;
        this._onboardingModalOpenedPrior = true;
      }
    }
  };
  items[20] = {
    key: "handleOnboardingModalReset",
    value(arg0) {
      if (arg0 == null) {
        HermesBuiltin.throwTypeError("Cannot destructure 'undefined' or 'null'.");
        throw undefined;
      } else {
        const self = this;
        this._onboardingModalOpenedPrior = false;
      }
    }
  };
  return callback(VirtualCurrencyStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "VirtualCurrencyStore";
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/virtual_currency/stores/VirtualCurrencyStore.tsx");

export default tmp2;
