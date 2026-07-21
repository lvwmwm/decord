// Module ID: 11230
// Function ID: 87430
// Name: useSortApplicationsViaFrecency
// Dependencies: []
// Exports: useSortApplicationsViaFrecency

// Module 11230 (useSortApplicationsViaFrecency)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const UserSettingsTypes = arg1(dependencyMap[2]).UserSettingsTypes;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = function useSortApplicationsViaFrecency(found, stateFromStoresArray) {
  stateFromStoresArray = found;
  const importDefault = stateFromStoresArray;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  const items = [closure_4];
  const stateFromStores = stateFromStoresArray(dependencyMap[4]).useStateFromStores(items, () => memo1.getApplicationFrecencyWithoutLoadingLatest());
  const dependencyMap = stateFromStores;
  const items1 = [found, stateFromStoresArray];
  const memo = React.useMemo(() => {
    if (null != arg1) {
      if (0 !== arg1.length) {
        let mapped = arg0.map((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          let someResult;
          if (null != closure_1) {
            someResult = closure_1.some((application) => application.application.id === application.id);
          }
          obj["isUserApp"] = null != someResult && someResult;
          return obj;
        });
      }
      return mapped;
    }
    mapped = arg0;
  }, items1);
  const React = memo;
  const items2 = [found, stateFromStoresArray];
  const memo1 = React.useMemo(() => {
    let found;
    if (null != arg1) {
      found = arg1.filter((arg0) => !arg0.some((id) => id.id === id.application.id));
    }
    return found;
  }, items2);
  closure_4 = memo1;
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = React.useMemo(() => {
    if (null != memo1) {
      const item = memo1.forEach((id) => {
        let obj = callback2(store[5]);
        if (null == store.getEntry(id.application.id)) {
          obj = { timestamp: extractTimestampResult };
          store.track(id.application.id, obj);
        }
      });
    }
    stateFromStores.compute();
    let mapped;
    if (null != memo1) {
      mapped = memo1.map((application) => callback(closure_2[6]).getApplicationCommandSection(application.application, true));
    }
    if (null == mapped) {
      mapped = [];
    }
    const items = [...closure_3];
    const items1 = [...mapped];
    items.push.apply(items1);
    const sorted = items.sort((id, id2) => {
      const score = store.getScore(id2.id);
      let num = 0;
      if (null != score) {
        num = score;
      }
      const score1 = store.getScore(id.id);
      let num2 = 0;
      if (null != score1) {
        num2 = score1;
      }
      let diff = num - num2;
      if (0 === diff) {
        const name = id.name;
        diff = name.localeCompare(id2.name);
      }
      return diff;
    });
    return items;
  }, items3);
  const UserSettingsTypes = memo2;
  const items4 = [memo2, memo, stateFromStores, stateFromStoresArray];
  return React.useMemo(() => {
    if (null != arg1) {
      const item = arg1.forEach((id) => {
        const extractTimestampResult = extractTimestampResult(str[5]).extractTimestamp(id.id);
        let tmp2 = null == extractTimestampResult;
        if (!tmp2) {
          tmp2 = extractTimestampResult > extractTimestampResult;
        }
      });
    }
    const item1 = memo.forEach((id) => {
      const entry = str.getEntry(id.id);
      let recentUses;
      if (null != entry) {
        recentUses = entry.recentUses;
      }
      if (null == recentUses) {
        recentUses = [];
      }
      const items = [...recentUses];
      const applyResult = Math.max.apply(items);
      let tmp3 = null == applyResult;
      if (!tmp3) {
        tmp3 = applyResult > applyResult;
      }
    });
    let id;
    if (null != arg0) {
      const application = arg0.application;
      if (null != application) {
        id = application.id;
      }
    }
    let str = "";
    if (null != id) {
      str = id;
    }
    const stateFromStores = str;
    const items = [...closure_5.filter((id) => id.id === str), ...closure_5.filter((id) => id.id !== str)];
    return items;
  }, items4);
};
