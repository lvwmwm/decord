// Module ID: 18766
// Function ID: 18767
// Name: useSmartSearchStatus
// Dependencies: [13115, 504, 13116, 13114, 2]
// Exports: useSmartSearchStatus

// Module 18766 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13114 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13116 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13115 */;
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
