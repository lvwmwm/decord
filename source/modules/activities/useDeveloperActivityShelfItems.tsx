// Module ID: 11151
// Function ID: 86709
// Name: useDeveloperActivityShelfItems
// Dependencies: []
// Exports: useDeveloperActivityShelfItems

// Module 11151 (useDeveloperActivityShelfItems)
let closure_2 = importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).DEFAULT_EMBEDDED_ACTIVITY_CONFIG;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/activities/useDeveloperActivityShelfItems.tsx");

export const useDeveloperActivityShelfItems = function useDeveloperActivityShelfItems() {
  const items = [closure_3];
  const stateFromStoresObject = arg1(dependencyMap[3]).useStateFromStoresObject(items, () => ({ isEnabled: store.getIsEnabled(), lastUsedObject: store.getLastUsedObject() }), []);
  const isEnabled = stateFromStoresObject.isEnabled;
  const arg1 = isEnabled;
  const lastUsedObject = stateFromStoresObject.lastUsedObject;
  const dependencyMap = lastUsedObject;
  const obj = arg1(dependencyMap[3]);
  const items1 = [closure_3];
  const stateFromStoresArray = arg1(dependencyMap[3]).useStateFromStoresArray(items1, () => store.getDeveloperShelfItems(), []);
  const React = stateFromStoresArray;
  const items2 = [stateFromStoresArray, isEnabled, lastUsedObject];
  return React.useMemo(() => {
    if (isEnabled) {
      const mapped = stateFromStoresArray.map((application) => {
        let obj = { application };
        obj = {};
        const merged = Object.assign(closure_4);
        const merged1 = Object.assign(application.embeddedActivityConfig);
        obj["application_id"] = application.id;
        obj.activity = obj;
        return obj;
      });
      let sorted = mapped.sort((arg0, arg1) => {
        let num = 1;
        if (null != closure_1[arg0.application.id]) {
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
