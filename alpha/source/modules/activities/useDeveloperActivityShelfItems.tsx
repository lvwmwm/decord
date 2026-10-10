// Module ID: 11718
// Function ID: 11719
// Name: useDeveloperActivityShelfItems
// Dependencies: [19, 9065, 2024, 558, 576, 504, 2]

// Module 11718 (useDeveloperActivityShelfItems)
import Constants from "Constants" /* 2024 */;
import react from "react" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 9065 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4 = Constants.DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDeveloperActivityShelfItems() {
  let lastUsedObject;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = lastUsedObject;
  const tmp2 = dependencyMap;
  let obj = lastUsedObject(576);
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperActivityShelfStore];
    const fn = function s() {
      const obj = { isEnabled: DeveloperActivityShelfStore.getIsEnabled(), lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject() };
      return obj;
    };
    const items1 = [];
    let num = 0;
    cResult[0] = items;
    let num2 = 1;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5, tmp6);
  lastUsedObject = stateFromStoresObject.lastUsedObject;
  const isEnabled = stateFromStoresObject.isEnabled;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [DeveloperActivityShelfStore];
    const fn2 = function p() {
      return DeveloperActivityShelfStore.getDeveloperShelfItems();
    };
    const items3 = [];
    cResult[3] = items2;
    cResult[4] = fn2;
    cResult[5] = items3;
    tmp11 = items3;
    tmp10 = fn2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresArray = tmpResult2.useStateFromStoresArray(tmp9, tmp10, tmp11);
  if (isEnabled) {
    let tmp16;
    let tmp17;
    if (cResult[7] === stateFromStoresArray) {
      let tmp15;
      if (cResult[8] === lastUsedObject) {
        tmp15 = cResult[9];
      }
      tmp13 = tmp15;
    }
    const _Symbol = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(application) {
          let obj2;
          const obj = { application, activity: obj2 };
          obj2 = { application_id: application.id };
          const merged = Object.assign(closure_1_4);
          const merged1 = Object.assign(application.embeddedActivityConfig);
          return obj;
        }
      }
      cResult[10] = I;
      tmp16 = I;
    } else {
      class I {
        constructor(application) {
          let obj2;
          const obj = { application, activity: obj2 };
          obj2 = { application_id: application.id };
          const merged = Object.assign(closure_1_4);
          const merged1 = Object.assign(application.embeddedActivityConfig);
          return obj;
        }
      }
    }
    if (cResult[11] !== lastUsedObject) {
      class I {
        constructor(application) {
          let obj2;
          const obj = { application, activity: obj2 };
          obj2 = { application_id: application.id };
          const merged = Object.assign(closure_1_4);
          const merged1 = Object.assign(application.embeddedActivityConfig);
          return obj;
        }
      }
      cResult[11] = lastUsedObject;
      cResult[12] = tmp18;
      tmp17 = tmp18;
    } else {
      class I {
        constructor(application) {
          let obj2;
          const obj = { application, activity: obj2 };
          obj2 = { application_id: application.id };
          const merged = Object.assign(closure_1_4);
          const merged1 = Object.assign(application.embeddedActivityConfig);
          return obj;
        }
      }
    }
    const mapped = stateFromStoresArray.map(tmp16);
    const sorted = mapped.sort(tmp17);
    cResult[7] = stateFromStoresArray;
    cResult[8] = lastUsedObject;
    cResult[9] = sorted;
    tmp15 = sorted;
  } else {
    class I {
      constructor(application) {
        let obj2;
        const obj = { application, activity: obj2 };
        obj2 = { application_id: application.id };
        const merged = Object.assign(closure_1_4);
        const merged1 = Object.assign(application.embeddedActivityConfig);
        return obj;
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(application) {
          let obj2;
          const obj = { application, activity: obj2 };
          obj2 = { application_id: application.id };
          const merged = Object.assign(closure_1_4);
          const merged1 = Object.assign(application.embeddedActivityConfig);
          return obj;
        }
      }
      cResult[6] = tmp14;
      tmp13 = tmp14;
    } else {
      class I {
        constructor(application) {
          let obj2;
          const obj = { application, activity: obj2 };
          obj2 = { application_id: application.id };
          const merged = Object.assign(closure_1_4);
          const merged1 = Object.assign(application.embeddedActivityConfig);
          return obj;
        }
      }
    }
  }
  return tmp13;
}) : (function useDeveloperActivityShelfItems() {
  let isEnabled;
  let lastUsedObject;
  let obj = isEnabled(lastUsedObject[5]);
  const items = [DeveloperActivityShelfStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { isEnabled: DeveloperActivityShelfStore.getIsEnabled(), lastUsedObject: DeveloperActivityShelfStore.getLastUsedObject() };
    return obj;
  }, []);
  isEnabled = stateFromStoresObject.isEnabled;
  lastUsedObject = stateFromStoresObject.lastUsedObject;
  let obj2 = isEnabled(lastUsedObject[5]);
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
});
const result = size.fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = tmp2;
