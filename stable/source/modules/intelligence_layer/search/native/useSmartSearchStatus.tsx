// Module ID: 19462
// Function ID: 19463
// Name: useSmartSearchStatus
// Dependencies: [14746, 504, 14747, 14745, 2]
// Exports: useSmartSearchStatus

// Module 19462 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14745 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14747 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14746 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchStatus.tsx");

export function useSmartSearchStatus(memo) {
  _require = memo;
  let obj = require("get initialized");
  const items = [SmartSearchResultsStore];
  const items1 = [memo];
  return obj.useStateFromStoresObject(items, () => {
    let NOT_QUALIFIED;
    if (null == memo) {
      NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
    } else {
      const obj = SmartSearchUtils;
      NOT_QUALIFIED = obj.getSmartSearchStatus(tmp, SmartSearchResultsStore);
    }
    return NOT_QUALIFIED;
  }, items1);
}
