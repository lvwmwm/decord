// Module ID: 13863
// Function ID: 106155
// Name: getSpendingLimitDisplayState
// Dependencies: [1316, 6769, 1851, 566, 13781, 5616, 5617, 1212, 2198, 2]
// Exports: useSpendingLimitDisplayState, useSpendingLimitFromUserSettings

// Module 13863 (getSpendingLimitDisplayState)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { SubscriptionIntervalTypes } from "GuildFeatures";

const require = arg1;
function getSpendingLimitDisplayState(amount) {
  if (null == amount) {
    let obj = { kind: "off" };
    return obj;
  } else if (0 === amount.amount) {
    obj = { kind: "blocked" };
    return obj;
  } else {
    const currency = amount.currency;
    const obj8 = require(5616) /* formatSingleCurrencyPrice */;
    const formatRateResult = obj8.formatRate(require(5616) /* formatSingleCurrencyPrice */.formatPrice(amount.amount, currency), SubscriptionIntervalTypes.MONTH, 1);
    if (arg1 >= amount.amount) {
      const obj1 = { kind: "spent", monthlyText: formatRateResult };
      return obj1;
    } else {
      const tmp12 = require(5617) /* CurrencyCodes */.CurrencyExponents[amount.currency];
      let num = 2;
      if (null != tmp12) {
        num = tmp12;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        const obj2 = { kind: "close-to-limit", monthlyText: formatRateResult };
        const intl = require(1212) /* getSystemLocale */.intl;
        let obj3 = {};
        obj3 = require(5616) /* formatSingleCurrencyPrice */;
        obj3.amount = obj3.formatPrice(diff, currency);
        obj2.remainingText = intl.formatToPlainString(importDefault(2198)["+Q+bU1"], obj3);
        obj = obj2;
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
    const obj9 = require(5616) /* formatSingleCurrencyPrice */;
  }
}
const result = require("GuildFeatures").fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = function useSpendingLimitFromUserSettings() {
  const items = [_isNativeReflectConstruct];
  return require(566) /* initialize */.useStateFromStores(items, () => {
    const safetySettings = outer1_3.settings.safetySettings;
    let oneTimePurchaseLimit;
    if (null != safetySettings) {
      const spendingLimitSettings = safetySettings.spendingLimitSettings;
      if (null != spendingLimitSettings) {
        oneTimePurchaseLimit = spendingLimitSettings.oneTimePurchaseLimit;
      }
    }
    let tmp2 = null;
    if (null != oneTimePurchaseLimit) {
      const obj = {};
      const _Number = Number;
      obj.amount = Number(oneTimePurchaseLimit.amount);
      obj.currency = oneTimePurchaseLimit.currency;
      tmp2 = obj;
    }
    return tmp2;
  }, undefined, require(13781) /* spendingLimitEqual */.spendingLimitEqual);
};
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export const useSpendingLimitDisplayState = function useSpendingLimitDisplayState(cap) {
  const items = [closure_4];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_4.getMonthlyPurchases());
  let total_amount;
  if (null != stateFromStores) {
    total_amount = stateFromStores.total_amount;
  }
  let num = 0;
  if (null != total_amount) {
    num = total_amount;
  }
  return getSpendingLimitDisplayState(cap, num);
};
