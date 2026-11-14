// Module ID: 17438
// Function ID: 17439
// Name: ChangeSpendingLimitFormState
// Dependencies: [5, 32, 19, 8740, 17347, 504, 7254, 17349, 17439, 8742, 2]
// Exports: useChangeSpendingLimitFormState

// Module 17438 (ChangeSpendingLimitFormState)
import SpendingLimitUtils from "SpendingLimitUtils" /* 17349 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8740 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_6, importDefault;

let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export function useChangeSpendingLimitFormState(teenId, closeChangeSpendingLimitModal) {
  let callback1;
  let closure_4;
  let formatted;
  let tmp14;
  let tmp29;
  _require = teenId;
  importDefault = closeChangeSpendingLimitModal;
  const tmp = _require;
  let ParentalControlledSpendingLimit = require("ParentalControlledUserSettings").ParentalControlledSpendingLimit;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = require("get initialized");
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_6.getSpendingLimit());
  let obj2 = require("get initialized");
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const monthlyPurchases = closure_6.getMonthlyPurchases();
    let total_amount;
    if (monthlyPurchases != null) {
      total_amount = monthlyPurchases.total_amount;
    }
    if (total_amount == null) {
      total_amount = null;
    }
    return total_amount;
  });
  let str;
  if (controlledSetting != null) {
    str = controlledSetting.currency;
  }
  if (str == null) {
    let currency;
    if (stateFromStores != null) {
      currency = stateFromStores.currency;
    }
    str = currency;
  }
  if (str == null) {
    str = "usd";
  }
  formatted = str.toLowerCase();
  let num = tmp(tmp2[6]).CurrencyExponents[formatted];
  if (num == null) {
    num = 2;
  }
  let obj3 = react;
  const items2 = [formatted];
  const memo = react.useMemo(() => {
    const obj = SpendingLimitUtils;
    return obj.getCurrencySymbol(formatted);
  }, items2);
  const memo1 = react.useMemo(tmp(tmp2[7]).getNextRenewalDateLabel, []);
  _slicedToArray = react.useRef(false);
  const tmp10 = require("useLoadTeenSettings")(teenId, () => {
    closure_4.current = true;
    closeChangeSpendingLimitModal();
  });
  const effect = react.useEffect(() => {
    let ref;
    return () => {
      if (ref.current) {
        const obj = closeChangeSpendingLimitModal(formatted[9]);
        const result = obj.showTeenSettingsLoadErrorToast();
      }
    };
  }, []);
  let tmp12 = _slicedToArray;
  const tmp13 = _slicedToArray(react.useState(null), 2);
  [tmp14, react] = tmp13;
  if (tmp14 == null) {
    let str2 = "";
    if (null != controlledSetting) {
      const _String = String;
      str2 = String(controlledSetting.amount / 10 ** num);
    }
  }
  const items3 = [num];
  let tmp18 = "" === tmp14;
  const callback = obj3.useCallback((arg0) => {
    const obj = SpendingLimitUtils;
    return react(obj.sanitizeAmountInput(arg0, num));
  }, items3);
  if (tmp18) {
    tmp18 = null != controlledSetting;
  }
  closure_6 = tmp18;
  const parsed = parseFloat(tmp14);
  let tmp21 = !Number.isNaN(parsed);
  Number.isNaN(parsed);
  if (tmp21) {
    tmp21 = parsed >= 0;
  }
  let tmp22 = tmp10;
  if (tmp22) {
    tmp22 = tmp18 || tmp21;
    const tmp23 = tmp18 || tmp21;
  }
  let closure_7 = tmp22;
  let rounded = null;
  if (tmp21) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp12Result = tmp12(obj3.useState(false), 2);
  let closure_9 = tmp12Result[1];
  const first = tmp12Result[0];
  const items4 = [tmp22, tmp18, rounded, teenId, formatted];
  let obj4 = { isLoaded: tmp10, amountInput: tmp14, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp18, isOverspending: tmp29, canSave: tmp22, isSubmitting: first, renewalDate: memo1, monthlySpend: stateFromStores1, save: callback1 };
  tmp29 = null != stateFromStores1;
  callback1 = obj3.useCallback(num(function*(arg0, value) {
    let closure_0;
    let closure_2;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp37 = closure_7;
            if (tmp37) {
              closure_9(true);
              c3 = 1;
              const tmp12 = closure_6;
              if (tmp12) {
                const ParentalControlledSpendingLimit2 = tmp(formatted[4]).ParentalControlledSpendingLimit;
                c1 = 2;
                c4 = 1;
                const obj4 = { value: ParentalControlledSpendingLimit2.updateControlledSetting(tmp, null), done: false };
                return obj4;
              } else if (null != rounded) {
                const ParentalControlledSpendingLimit = tmp(formatted[4]).ParentalControlledSpendingLimit;
                const obj5 = { amount: tmp13, currency: formatted };
                c1 = 3;
                c4 = 1;
                const obj6 = { value: ParentalControlledSpendingLimit.updateControlledSetting(tmp, obj5), done: false };
                return obj6;
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === c1) {
          c3 = 0;
          closure_128_9(false);
          throw formatted;
        } else if (2 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_9(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_9(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        closure_128_9(false);
      } catch (tmp24) {
        formatted = tmp24;
        if (0 === c3) {
          c4 = 3;
          throw tmp24;
        } else {
          c1 = 1;
        }
      }
    }
  }), items4);
  if (tmp29) {
    tmp29 = stateFromStores1 > 0;
  }
  if (tmp29) {
    tmp29 = null != rounded;
  }
  if (tmp29) {
    tmp29 = rounded <= stateFromStores1;
  }
  return obj4;
}
