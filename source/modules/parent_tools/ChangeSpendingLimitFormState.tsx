// Module ID: 13690
// Function ID: 103633
// Name: useChangeSpendingLimitFormState
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: useChangeSpendingLimitFormState

// Module 13690 (useChangeSpendingLimitFormState)
import closure_2 from "result";
import closure_3 from "result";
import closure_4 from "result";
import closure_5 from "result";
import result from "result";

result = result.fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export const useChangeSpendingLimitFormState = function useChangeSpendingLimitFormState(teenId) {
  const arg1 = teenId;
  const ParentalControlledSpendingLimit = arg1(dependencyMap[4]).ParentalControlledSpendingLimit;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  const dependencyMap = controlledSetting;
  let obj = arg1(dependencyMap[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => tmp14.getSpendingLimit());
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => {
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
  let callback = formatted;
  const tmp8 = arg1(dependencyMap[6]).CurrencyExponents[formatted];
  let num = 2;
  if (null != tmp8) {
    num = tmp8;
  }
  const callback2 = num;
  const items2 = [formatted];
  const memo = React.useMemo(() => arg0(controlledSetting[7]).getCurrencySymbol(formatted), items2);
  const memo1 = React.useMemo(arg1(dependencyMap[7]).getNextRenewalDateLabel, []);
  const tmp11 = callback2(React.useState(() => {
    let str = "";
    if (null != controlledSetting) {
      const _String = String;
      str = String(controlledSetting.amount / 10 ** num);
    }
    return str;
  }), 2);
  const first = tmp11[0];
  const React = tmp11[1];
  const items3 = [num];
  let tmp14 = "" === first;
  callback = React.useCallback((arg0) => callback(arg0(controlledSetting[7]).sanitizeAmountInput(arg0, num)), items3);
  if (tmp14) {
    tmp14 = null != controlledSetting;
  }
  closure_5 = tmp14;
  const parsed = parseFloat(first);
  const tmp16 = !Number.isNaN(parsed) && parsed >= 0;
  let tmp17 = tmp14;
  if (!tmp14) {
    tmp17 = tmp16;
  }
  let rounded = null;
  if (tmp16) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp20 = callback2(React.useState(false), 2);
  let closure_8 = tmp20[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items4 = [tmp17, tmp14, rounded, teenId, formatted];
  obj = { amountInput: first, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp14 };
  let tmp22 = null != stateFromStores1;
  const callback1 = React.useCallback(callback(tmp), items4);
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
