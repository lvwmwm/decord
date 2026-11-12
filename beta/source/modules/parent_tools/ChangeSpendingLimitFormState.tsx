// Module ID: 17164
// Function ID: 17165
// Name: ChangeSpendingLimitFormState
// Dependencies: [5, 32, 19, 7824, 17149, 17073, 504, 7511, 17075, 7826, 2]
// Exports: useChangeSpendingLimitFormState

// Module 17164 (ChangeSpendingLimitFormState)
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7826 */;
import SpendingLimitUtils from "SpendingLimitUtils" /* 17075 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7824 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c4, closure_6;

let react = react_mod;
let result = size.fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export function useChangeSpendingLimitFormState(teenId, closeChangeSpendingLimitModal) {
  let callback1;
  let closure_5;
  let closure_7;
  let hasLoadedSettingsForTeen;
  let tmp15;
  let tmp30;
  _require = teenId;
  const tmp = _require;
  let obj = require("useSelectedTeenUser");
  hasLoadedSettingsForTeen = obj.useHasLoadedSettingsForTeen(teenId);
  let ParentalControlledSpendingLimit = require("ParentalControlledUserSettings").ParentalControlledSpendingLimit;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj2 = require("get initialized");
  const items = [closure_6];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_6.getSpendingLimit());
  let obj3 = require("get initialized");
  const items1 = [closure_6];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
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
  const formatted = str.toLowerCase();
  let num = tmp(tmp2[7]).CurrencyExponents[formatted];
  if (num == null) {
    num = 2;
  }
  let obj4 = react;
  const items2 = [formatted];
  const memo = react.useMemo(() => {
    const obj = SpendingLimitUtils;
    return obj.getCurrencySymbol(formatted);
  }, items2);
  const memo1 = react.useMemo(tmp(tmp2[8]).getNextRenewalDateLabel, []);
  react = react.useRef(false);
  closure_6 = react.useEffectEvent(() => {
    closure_5.current = true;
    closeChangeSpendingLimitModal();
  });
  const items3 = [teenId, hasLoadedSettingsForTeen];
  const effect = react.useEffect(() => {
    if (!hasLoadedSettingsForTeen) {
      const obj = FamilyCenterActionCreatorsDefault;
      const result = obj.onTeenSettingsLoadFailure(teenId, closure_6);
      const obj2 = FamilyCenterActionCreatorsDefault;
      const teenSettingsAndConsents = obj2.fetchTeenSettingsAndConsents(teenId);
      return result;
    }
  }, items3);
  const effect1 = react.useEffect(() => {
    let ref;
    return () => {
      if (ref.current) {
        const obj = closeChangeSpendingLimitModal(hasLoadedSettingsForTeen[9]);
        const result = obj.showTeenSettingsLoadErrorToast();
      }
    };
  }, []);
  const tmp13 = num;
  [tmp15, closure_7] = num(react.useState(null), 2);
  const tmp14 = num(react.useState(null), 2);
  if (tmp15 == null) {
    let str2 = "";
    if (null != controlledSetting) {
      const _String = String;
      str2 = String(controlledSetting.amount / 10 ** num);
    }
  }
  const items4 = [num];
  let tmp19 = "" === tmp15;
  const callback = obj4.useCallback((arg0) => {
    const obj = SpendingLimitUtils;
    return closure_7(obj.sanitizeAmountInput(arg0, num));
  }, items4);
  if (tmp19) {
    tmp19 = null != controlledSetting;
  }
  let closure_8 = tmp19;
  const parsed = parseFloat(tmp15);
  let tmp22 = !Number.isNaN(parsed);
  Number.isNaN(parsed);
  if (tmp22) {
    tmp22 = parsed >= 0;
  }
  let tmp23 = hasLoadedSettingsForTeen;
  if (tmp23) {
    const tmp24 = tmp19 || tmp22;
    tmp23 = tmp24;
  }
  let closure_9 = tmp23;
  let rounded = null;
  if (tmp22) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp13Result = tmp13(obj4.useState(false), 2);
  let closure_11 = tmp13Result[1];
  const first = tmp13Result[0];
  const items5 = [tmp23, tmp19, rounded, teenId, formatted];
  let obj5 = { isLoaded: hasLoadedSettingsForTeen, amountInput: tmp15, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp19, isOverspending: tmp30, canSave: tmp23, isSubmitting: first, renewalDate: memo1, monthlySpend: stateFromStores1, save: callback1 };
  tmp30 = null != stateFromStores1;
  callback1 = obj4.useCallback(formatted(function*(arg0, value) {
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
            const tmp37 = closure_9;
            if (tmp37) {
              closure_11(true);
              c3 = 1;
              const tmp12 = closure_8;
              if (tmp12) {
                const ParentalControlledSpendingLimit2 = tmp(hasLoadedSettingsForTeen[5]).ParentalControlledSpendingLimit;
                c1 = 2;
                c4 = 1;
                const obj4 = { value: ParentalControlledSpendingLimit2.updateControlledSetting(tmp, null), done: false };
                return obj4;
              } else if (null != rounded) {
                const ParentalControlledSpendingLimit = tmp(hasLoadedSettingsForTeen[5]).ParentalControlledSpendingLimit;
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
          closure_128_11(false);
          throw hasLoadedSettingsForTeen;
        } else if (2 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_11(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_11(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        closure_128_11(false);
      } catch (tmp24) {
        hasLoadedSettingsForTeen = tmp24;
        if (0 === c3) {
          c4 = 3;
          throw tmp24;
        } else {
          c1 = 1;
        }
      }
    }
  }), items5);
  if (tmp30) {
    tmp30 = stateFromStores1 > 0;
  }
  if (tmp30) {
    tmp30 = null != rounded;
  }
  if (tmp30) {
    tmp30 = rounded <= stateFromStores1;
  }
  return obj5;
}
