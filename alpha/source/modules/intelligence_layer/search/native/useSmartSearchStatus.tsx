// Module ID: 19270
// Function ID: 19271
// Name: useSmartSearchStatus
// Dependencies: [14635, 504, 14636, 14634, 2]
// Exports: useSmartSearchStatus

// Module 19270 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14634 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14636 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14635 */;
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
