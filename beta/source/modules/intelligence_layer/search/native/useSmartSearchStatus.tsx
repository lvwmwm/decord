// Module ID: 18692
// Function ID: 18693
// Name: useSmartSearchStatus
// Dependencies: [13890, 504, 13891, 13889, 2]
// Exports: useSmartSearchStatus

// Module 18692 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13889 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13891 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13890 */;
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
