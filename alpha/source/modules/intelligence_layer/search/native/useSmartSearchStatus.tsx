// Module ID: 19055
// Function ID: 19056
// Name: useSmartSearchStatus
// Dependencies: [14124, 504, 14125, 14123, 2]
// Exports: useSmartSearchStatus

// Module 19055 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14123 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14125 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14124 */;
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
