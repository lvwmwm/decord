// Module ID: 18690
// Function ID: 18691
// Name: useSmartSearchStatus
// Dependencies: [13875, 504, 13876, 13874, 2]
// Exports: useSmartSearchStatus

// Module 18690 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13874 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13876 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13875 */;
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
