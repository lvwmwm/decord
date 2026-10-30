// Module ID: 16758
// Function ID: 16759
// Name: SpendingLimitDisplay
// Dependencies: [1232, 7708, 1386, 504, 16669, 7407, 7408, 1114, 2537, 2]
// Exports: useSpendingLimitDisplayState, useSpendingLimitFromUserSettings

// Module 16758 (SpendingLimitDisplay)
import get_initialized from "get initialized" /* 504 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import _modDef2537 from "module_2537" /* 2537 */;
import PriceUtils from "PriceUtils" /* 7407 */;
import SpendingLimitUtils from "SpendingLimitUtils" /* 16669 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1232 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7708 */;
import size from "module_2" /* 2 */;

function getSpendingLimitDisplayState(amount, arg1) {
  let formatToPlainString;
  let obj4;
  let prop;
  let tmp6Result;
  if (null == amount) {
    return { kind: "off" };
  } else if (0 === amount.amount) {
    return { kind: "blocked" };
  } else {
    const currency = amount.currency;
    const formatRate = PriceUtils.formatRate;
    PriceUtils;
    const obj6 = PriceUtils;
    const formatRateResult = formatRate(obj6.formatPrice(amount.amount, currency), SubscriptionIntervalTypes.MONTH, 1);
    if (arg1 >= amount.amount) {
      return { kind: "spent", monthlyText: formatRateResult };
    } else {
      let obj;
      let num = tmp6(7408).CurrencyExponents[amount.currency];
      if (num == null) {
        num = 2;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        const obj3 = { kind: "close-to-limit", monthlyText: formatRateResult, remainingText: formatToPlainString(prop, obj4) };
        const intl = tmp6(1114).intl;
        formatToPlainString = intl.formatToPlainString;
        obj4 = { amount: tmp6Result.formatPrice(diff, currency) };
        prop = _modDef2537["+Q+bU1"];
        obj = obj3;
        tmp6Result = PriceUtils;
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
  }
}
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const result = size.fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export function useSpendingLimitFromUserSettings() {
  let settings;
  let obj = get_initialized;
  const items = [UserSettingsProtoStore];
  return obj.useStateFromStores(items, () => {
    const safetySettings = settings.settings.safetySettings;
    let oneTimePurchaseLimit;
    if (safetySettings != null) {
      const spendingLimitSettings = safetySettings.spendingLimitSettings;
      if (spendingLimitSettings != null) {
        oneTimePurchaseLimit = spendingLimitSettings.oneTimePurchaseLimit;
      }
    }
    let tmp2 = null;
    if (null != oneTimePurchaseLimit) {
      const _Number = Number;
      tmp2 = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
      const obj = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
    }
    return tmp2;
  }, undefined, SpendingLimitUtils.spendingLimitEqual);
}
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export function useSpendingLimitDisplayState(cap) {
  let monthlyPurchases;
  const items = [FamilyCenterStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => monthlyPurchases.getMonthlyPurchases());
  let num;
  const tmp2 = getSpendingLimitDisplayState;
  if (stateFromStores != null) {
    num = stateFromStores.total_amount;
  }
  if (num == null) {
    num = 0;
  }
  return tmp2(cap, num);
}
