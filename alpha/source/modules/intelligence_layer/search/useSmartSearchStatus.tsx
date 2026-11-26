// Module ID: 18940
// Function ID: 18941
// Name: useSmartSearchStatus
// Dependencies: [13290, 504, 13291, 13289, 2]
// Exports: useSmartSearchStatus

// Module 18940 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13289 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13291 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13290 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/intelligence_layer/search/useSmartSearchStatus.tsx");

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
