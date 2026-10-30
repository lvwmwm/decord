// Module ID: 12192
// Function ID: 12193
// Name: useDeveloperActivityShelfItems
// Dependencies: [19, 5669, 2019, 504, 2]
// Exports: useDeveloperActivityShelfItems

// Module 12192 (useDeveloperActivityShelfItems)
import Constants from "Constants" /* 2019 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5669 */;
import size from "module_2" /* 2 */;

let closure_4 = Constants.DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
const result = size.fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export function useDeveloperActivityShelfItems() {
  let isEnabled;
  let lastUsedObject;
  let obj = isEnabled(lastUsedObject[3]);
  const items = [DeveloperActivityShelfStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isEnabled: DeveloperActivityShelfStore.getIsEnabled(), lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject() };
    return obj;
  }, []);
  isEnabled = stateFromStoresObject.isEnabled;
  lastUsedObject = stateFromStoresObject.lastUsedObject;
  let obj2 = isEnabled(lastUsedObject[3]);
  const items1 = [DeveloperActivityShelfStore];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => DeveloperActivityShelfStore.getDeveloperShelfItems(), []);
  const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
  return stateFromStoresArray.useMemo(() => {
    let sorted;
    const tmp = isEnabled;
    if (tmp) {
      const tmp2 = stateFromStoresArray;
      const mapped = stateFromStoresArray.map((application) => {
        let obj2;
        const obj = { application, activity: obj2 };
        obj2 = { application_id: application.id };
        const merged = Object.assign(closure_1_4);
        const merged1 = Object.assign(application.embeddedActivityConfig);
        return obj;
      });
      sorted = mapped.sort((arg0, arg1) => {
        let num = 1;
        if (null != lastUsedObject[arg0.application.id]) {
          let num2 = -1;
          if (null != lastUsedObject[arg1.application.id]) {
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
}
