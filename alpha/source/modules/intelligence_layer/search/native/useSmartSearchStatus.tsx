// Module ID: 19084
// Function ID: 19085
// Name: useSmartSearchStatus
// Dependencies: [14150, 504, 14151, 14149, 2]
// Exports: useSmartSearchStatus

// Module 19084 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14149 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14151 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14150 */;
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
