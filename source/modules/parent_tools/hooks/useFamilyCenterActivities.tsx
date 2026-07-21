// Module ID: 13674
// Function ID: 103519
// Name: useActionTotalsForDisplayType
// Dependencies: []
// Exports: useActionsForDisplayType, useFormattedTotalForDisplayType, useHasActionForAnyDisplayType

// Module 13674 (useActionTotalsForDisplayType)
function useActionTotalsForDisplayType(displayType) {
  const arg1 = displayType;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => totalForDisplayType.getTotalForDisplayType(arg0));
}
let closure_2 = importDefault(dependencyMap[0]);
const TeenActionDisplayType = arg1(dependencyMap[1]).TeenActionDisplayType;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export const useActionsForDisplayType = function useActionsForDisplayType(displayType) {
  const arg1 = displayType;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStoresArray(items, () => actionsForDisplayType.getActionsForDisplayType(arg0));
};
export { useActionTotalsForDisplayType };
export const useHasActionForAnyDisplayType = function useHasActionForAnyDisplayType() {
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, () => {
    const values = Object.values(closure_3);
    return values.some((arg0) => totalForDisplayType.getTotalForDisplayType(arg0) > 0);
  });
};
export const useFormattedTotalForDisplayType = function useFormattedTotalForDisplayType(displayType) {
  const tmp = useActionTotalsForDisplayType(displayType);
  let num = 0;
  if (null != tmp) {
    num = tmp;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    return arg1(dependencyMap[3]).formatTotalTime(num);
  } else if (displayType === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = store.getTotalSpendAmount();
    const totalSpendCurrency = store.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        result = arg1(dependencyMap[4]).shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
        const obj2 = arg1(dependencyMap[4]);
      }
    }
    return result;
  } else if (displayType === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = store.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      result1 = arg1(dependencyMap[4]).shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
      const obj = arg1(dependencyMap[4]);
    }
    return result1;
  } else {
    return num;
  }
};
