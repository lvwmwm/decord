// Module ID: 19265
// Function ID: 19266
// Name: useSmartSearchStatus
// Dependencies: [14631, 504, 14632, 14630, 2]
// Exports: useSmartSearchStatus

// Module 19265 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14630 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14632 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 14631 */;
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
