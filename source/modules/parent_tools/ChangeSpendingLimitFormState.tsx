// Module ID: 13811
// Function ID: 105822
// Name: useChangeSpendingLimitFormState
// Dependencies: [5, 57, 31, 6769, 13728, 566, 5619, 13730, 2]
// Exports: useChangeSpendingLimitFormState

// Module 13811 (useChangeSpendingLimitFormState)
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export const useChangeSpendingLimitFormState = function useChangeSpendingLimitFormState(teenId) {
  const _require = teenId;
  const ParentalControlledSpendingLimit = _require(controlledSetting[4]).ParentalControlledSpendingLimit;
  controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = _require(controlledSetting[5]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => tmp14.getSpendingLimit());
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(controlledSetting[5]).useStateFromStores(items1, () => {
    const monthlyPurchases = tmp14.getMonthlyPurchases();
    let total_amount;
    if (null != monthlyPurchases) {
      total_amount = monthlyPurchases.total_amount;
    }
    let tmp3 = null;
    if (null != total_amount) {
      tmp3 = total_amount;
    }
    return tmp3;
  });
  let currency;
  if (null != controlledSetting) {
    currency = controlledSetting.currency;
  }
  if (null == currency) {
    let currency1;
    if (null != stateFromStores) {
      currency1 = stateFromStores.currency;
    }
    currency = currency1;
  }
  let str = "usd";
  if (null != currency) {
    str = currency;
  }
  const formatted = str.toLowerCase();
  const tmp8 = _require(controlledSetting[6]).CurrencyExponents[formatted];
  let num = 2;
  if (null != tmp8) {
    num = tmp8;
  }
  const items2 = [formatted];
  const memo = React.useMemo(() => teenId(controlledSetting[7]).getCurrencySymbol(formatted), items2);
  const memo1 = React.useMemo(_require(controlledSetting[7]).getNextRenewalDateLabel, []);
  const tmp11 = num(React.useState(() => {
    let str = "";
    if (null != controlledSetting) {
      const _String = String;
      str = String(controlledSetting.amount / 10 ** num);
    }
    return str;
  }), 2);
  const first = tmp11[0];
  React = tmp11[1];
  const items3 = [num];
  let tmp14 = "" === first;
  const callback = React.useCallback((arg0) => callback(teenId(controlledSetting[7]).sanitizeAmountInput(arg0, num)), items3);
  if (tmp14) {
    tmp14 = null != controlledSetting;
  }
  _isNativeReflectConstruct = tmp14;
  const parsed = parseFloat(first);
  const tmp16 = !Number.isNaN(parsed) && parsed >= 0;
  let tmp17 = tmp14;
  if (!tmp14) {
    tmp17 = tmp16;
  }
  let closure_6 = tmp17;
  let rounded = null;
  if (tmp16) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp20 = num(React.useState(false), 2);
  let closure_8 = tmp20[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [tmp17, tmp14, rounded, teenId, formatted];
  obj = { amountInput: first, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp14 };
  let tmp22 = null != stateFromStores1;
  const callback1 = React.useCallback(formatted(tmp), items4);
  if (tmp22) {
    tmp22 = stateFromStores1 > 0;
  }
  if (tmp22) {
    tmp22 = null != rounded;
  }
  if (tmp22) {
    tmp22 = rounded <= stateFromStores1;
  }
  obj.isOverspending = tmp22;
  obj.canSave = tmp17;
  obj.isSubmitting = tmp20[0];
  obj.renewalDate = memo1;
  obj.monthlySpend = stateFromStores1;
  obj.save = callback1;
  return obj;
};
