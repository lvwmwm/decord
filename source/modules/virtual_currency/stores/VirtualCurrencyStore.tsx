// Module ID: 8724
// Function ID: 69013
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 686, 566, 2]

// Module 8724 (_isNativeReflectConstruct)
import initialize from "initialize";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp2 = ((Store) => {
  class VirtualCurrencyStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, apply);
      items = [, ];
      items[0] = VirtualCurrencyStore(outer1_1[5]);
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
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
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
  callback2(VirtualCurrencyStore, Store);
  let obj = {
    key: "redeemError",
    get() {
      return this._redeemVirtualCurrencyError;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , ];
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
})(require("initialize").Store);
tmp2.displayName = "VirtualCurrencyStore";
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/virtual_currency/stores/VirtualCurrencyStore.tsx");

export default tmp2;
