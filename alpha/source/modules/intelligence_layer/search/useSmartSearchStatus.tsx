// Module ID: 18877
// Function ID: 18878
// Name: useSmartSearchStatus
// Dependencies: [13238, 504, 13239, 13237, 2]
// Exports: useSmartSearchStatus

// Module 18877 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13237 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13239 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13238 */;
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
