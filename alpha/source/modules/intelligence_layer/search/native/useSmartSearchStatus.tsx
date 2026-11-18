// Module ID: 18780
// Function ID: 18781
// Name: useSmartSearchStatus
// Dependencies: [13129, 504, 13130, 13128, 2]
// Exports: useSmartSearchStatus

// Module 18780 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13128 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13130 */;
import SmartSearchResultsStore from "SmartSearchResultsStore" /* 13129 */;
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
