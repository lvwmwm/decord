// Module ID: 13797
// Function ID: 105730
// Name: useActionTotalsForDisplayType
// Dependencies: [6769, 6770, 624, 6828, 5618, 2]
// Exports: useActionsForDisplayType, useFormattedTotalForDisplayType, useHasActionForAnyDisplayType

// Module 13797 (useActionTotalsForDisplayType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { TeenActionDisplayType } from "items";

const require = arg1;
function useActionTotalsForDisplayType(displayType) {
  const _require = displayType;
  const items = [_isNativeReflectConstruct];
  return _require(624).useStateFromStores(items, () => outer1_2.getTotalForDisplayType(closure_0));
}
let result = require("defaultAreStatesEqual").fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  const _require = displayType;
  const items = [_isNativeReflectConstruct];
  return _require(624).useStateFromStoresArray(items, () => outer1_2.getActionsForDisplayType(closure_0));
};
export { useActionTotalsForDisplayType };
export const useHasActionForAnyDisplayType = function useHasActionForAnyDisplayType() {
  const items = [_isNativeReflectConstruct];
  return require(624) /* defaultAreStatesEqual */.useStateFromStores(items, () => {
    const values = Object.values(outer1_3);
    return values.some((arg0) => outer2_2.getTotalForDisplayType(arg0) > 0);
  });
};
export const useFormattedTotalForDisplayType = function useFormattedTotalForDisplayType(displayType) {
  const tmp = useActionTotalsForDisplayType(displayType);
  let num = 0;
  if (null != tmp) {
    num = tmp;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    return require(6828) /* getActivityTypeTextConfigs */.formatTotalTime(num);
  } else if (displayType === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = store.getTotalSpendAmount();
    const totalSpendCurrency = store.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        result = require(5618) /* formatSingleCurrencyPrice */.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
        const obj2 = require(5618) /* formatSingleCurrencyPrice */;
      }
    }
    return result;
  } else if (displayType === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = store.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = require(5618) /* formatSingleCurrencyPrice */.shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const obj = require(5618) /* formatSingleCurrencyPrice */;
    }
    return result1;
  } else {
    return num;
  }
};
