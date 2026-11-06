// Module ID: 17057
// Function ID: 17058
// Name: useFamilyCenterActivities
// Dependencies: [7814, 7815, 563, 8464, 7500, 2]
// Exports: useActionTotalsForDisplayType, useActionsForDisplayType, useFormattedTotalForDisplayType, useHasActionForAnyDisplayType

// Module 17057 (useFamilyCenterActivities)
import useStateFromStores from "useStateFromStores" /* 563 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7815 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7814 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const f112104 = () => FamilyCenterStore.getTotalForDisplayType(displayType);
const TeenActionDisplayType = FamilyCenterConstants.TeenActionDisplayType;
let result = size.fileFinishedImporting("modules/parent_tools/hooks/useFamilyCenterActivities.tsx");

export function useActionsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStoresArray(items, () => FamilyCenterStore.getActionsForDisplayType(displayType));
}
export function useActionTotalsForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  return obj.useStateFromStores(items, f112104);
}
export function useHasActionForAnyDisplayType() {
  const items = [FamilyCenterStore];
  const obj = useStateFromStores;
  return obj.useStateFromStores(items, () => {
    let totalForDisplayType;
    const values = Object.values(TeenActionDisplayType);
    return values.some((item) => totalForDisplayType.getTotalForDisplayType(item) > 0);
  });
}
export function useFormattedTotalForDisplayType(displayType) {
  _require = displayType;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  let num = obj.useStateFromStores(items, f112104);
  if (num == null) {
    num = 0;
  }
  if (displayType === TeenActionDisplayType.TOTAL_VOICE_MINUTES) {
    const tmpResult = require("FamilyCenterUtils");
    return tmpResult.formatTotalTime(num);
  } else if (displayType === TeenActionDisplayType.PURCHASES) {
    const totalSpendAmount = obj2.getTotalSpendAmount();
    const totalSpendCurrency = obj2.getTotalSpendCurrency();
    let result = num;
    if (null != totalSpendAmount) {
      result = num;
      if (null != totalSpendCurrency) {
        const tmpResult3 = require("PriceUtils");
        result = tmpResult3.shortenAndFormatPrice(totalSpendAmount, totalSpendCurrency);
      }
    }
    return result;
  } else if (displayType === TeenActionDisplayType.GIFTS) {
    const totalGiftValue = obj2.getTotalGiftValue();
    let result1 = num;
    if (null != totalGiftValue) {
      const tmpResult4 = require("PriceUtils");
      result1 = tmpResult4.shortenAndFormatPrice(totalGiftValue.amount, totalGiftValue.currency);
    }
    return result1;
  } else {
    return num;
  }
}
