// Module ID: 13691
// Function ID: 103642
// Name: getSpendingLimitDisplayState
// Dependencies: []
// Exports: useSpendingLimitDisplayState, useSpendingLimitFromUserSettings

// Module 13691 (getSpendingLimitDisplayState)
function getSpendingLimitDisplayState(amount) {
  if (null == amount) {
    let obj = { kind: "off" };
    return obj;
  } else if (0 === amount.amount) {
    obj = { kind: "blocked" };
    return obj;
  } else {
    const currency = amount.currency;
    const obj8 = arg1(dependencyMap[5]);
    const formatRateResult = obj8.formatRate(arg1(dependencyMap[5]).formatPrice(amount.amount, currency), SubscriptionIntervalTypes.MONTH, 1);
    if (arg1 >= amount.amount) {
      const obj1 = { kind: "spent", monthlyText: formatRateResult };
      return obj1;
    } else {
      const tmp12 = arg1(dependencyMap[6]).CurrencyExponents[amount.currency];
      let num = 2;
      if (null != tmp12) {
        num = tmp12;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        const obj2 = { kind: "close-to-limit", monthlyText: formatRateResult };
        const intl = arg1(dependencyMap[7]).intl;
        let obj3 = {};
        obj3 = arg1(dependencyMap[5]);
        obj3.amount = obj3.formatPrice(diff, currency);
        obj2.remainingText = intl.formatToPlainString(importDefault(dependencyMap[8]).+Q+bU1, obj3);
        obj = obj2;
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
    const obj9 = arg1(dependencyMap[5]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const SubscriptionIntervalTypes = arg1(dependencyMap[2]).SubscriptionIntervalTypes;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = function useSpendingLimitFromUserSettings() {
  const items = [closure_3];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const safetySettings = settings.settings.safetySettings;
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
  }, undefined, arg1(dependencyMap[4]).spendingLimitEqual);
};
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export const useSpendingLimitDisplayState = function useSpendingLimitDisplayState(cap) {
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => monthlyPurchases.getMonthlyPurchases());
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
