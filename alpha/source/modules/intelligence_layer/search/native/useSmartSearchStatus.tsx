// Module ID: 19457
// Function ID: 19458
// Name: useSmartSearchStatus
// Dependencies: [14744, 504, 14745, 14743, 2]
// Exports: useSmartSearchStatus

// Module 19457 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14743 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14745 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14744 */;
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
