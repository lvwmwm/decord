// Module ID: 11192
// Function ID: 87053
// Name: useDeveloperActivityShelfItems
// Dependencies: [31, 7370, 4155, 566, 2]
// Exports: useDeveloperActivityShelfItems

// Module 11192 (useDeveloperActivityShelfItems)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DEFAULT_EMBEDDED_ACTIVITY_CONFIG as closure_4 } from "items3";

const require = arg1;
const result = require("items3").fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = function useDeveloperActivityShelfItems() {
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = isEnabled(lastUsedObject[3]).useStateFromStoresObject(items, () => ({ isEnabled: outer1_3.getIsEnabled(), lastUsedObject: outer1_3.getLastUsedObject() }), []);
  isEnabled = stateFromStoresObject.isEnabled;
  lastUsedObject = stateFromStoresObject.lastUsedObject;
  let obj = isEnabled(lastUsedObject[3]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresArray = isEnabled(lastUsedObject[3]).useStateFromStoresArray(items1, () => outer1_3.getDeveloperShelfItems(), []);
  const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
  return stateFromStoresArray.useMemo(() => {
    if (isEnabled) {
      const mapped = stateFromStoresArray.map((application) => {
        let obj = { application };
        obj = {};
        const merged = Object.assign(outer2_4);
        const merged1 = Object.assign(application.embeddedActivityConfig);
        obj["application_id"] = application.id;
        obj.activity = obj;
        return obj;
      });
      let sorted = mapped.sort((arg0, arg1) => {
        let num = 1;
        if (null != outer1_1[arg0.application.id]) {
          let num2 = -1;
          if (null != tmp2) {
            num2 = tmp2 - tmp;
          }
          num = num2;
        }
        return num;
      });
    } else {
      sorted = [];
    }
    return sorted;
  }, items2);
};
