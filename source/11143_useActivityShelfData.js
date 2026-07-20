// Module ID: 11143
// Function ID: 86659
// Name: useActivityShelfData
// Dependencies: []
// Exports: useActivityShelfData

// Module 11143 (useActivityShelfData)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = function useActivityShelfData(guildId) {
  const arg1 = guildId;
  const items = [getCurrentUser];
  const stateFromStores = arg1(dependencyMap[4]).useStateFromStores(items, getCurrentUser.getCurrentUser);
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[4]);
  const items1 = [closure_6];
  const stateFromStoresArray = arg1(dependencyMap[4]).useStateFromStoresArray(items1, () => memo1.getShelfActivities(arg0));
  const dependencyMap = stateFromStoresArray;
  const obj2 = arg1(dependencyMap[4]);
  const items2 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[4]).useStateFromStores(items2, () => memo.testModeEmbeddedApplicationId);
  const React = stateFromStores1;
  const mapped = stateFromStoresArray.map((application_id) => application_id.application_id);
  let tmp4 = mapped;
  if (null != stateFromStores1) {
    const items3 = [stateFromStores1];
    HermesBuiltin.arraySpread(mapped, 1);
    tmp4 = items3;
  }
  const tmp8 = importDefault(dependencyMap[5])(tmp4);
  const getCurrentUser = tmp8;
  const items4 = [tmp8];
  const memo = React.useMemo(() => tmp8.filter(arg0(stateFromStoresArray[6]).isNotNullish), items4);
  closure_5 = memo;
  const items5 = [memo, stateFromStores1];
  const memo1 = React.useMemo(() => {
    if (null != stateFromStores1) {
      if (memo.length > 0) {
        if (memo[0].id === stateFromStores1) {
          if (null != memo[0].embeddedActivityConfig) {
            const obj = { activity: memo[0].embeddedActivityConfig, application: memo[0] };
            const items = [obj];
          }
          return [];
        }
      }
    }
  }, items5);
  closure_6 = memo1;
  const items6 = [stateFromStoresArray, memo];
  const memo2 = React.useMemo(() => {
    const mapped = stateFromStoresArray.map((activity) => {
      const found = closure_5.find((id) => id.id === id.application_id);
      let tmp2 = null;
      if (null != found) {
        const obj = { activity, application: found };
        tmp2 = obj;
      }
      return tmp2;
    });
    return mapped.filter(arg0(stateFromStoresArray[6]).isNotNullish);
  }, items6);
  let nsfwAllowed;
  if (null != stateFromStores) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items7 = [nsfwAllowed, memo2, memo1];
  return React.useMemo(() => {
    const items = [...closure_7];
    const found = items.filter((activity) => {
      let supported_platforms = activity.activity.supported_platforms;
      if (null == supported_platforms) {
        supported_platforms = [];
      }
      const tmp = lib(closure_2[7]);
      return supported_platforms.includes(tmp(callback(closure_2[8]).getOS()));
    });
    const found1 = found.filter((activity) => {
      let tmp = !activity.activity.requires_age_gate;
      if (!tmp) {
        let nsfwAllowed;
        if (null != lib) {
          nsfwAllowed = lib.nsfwAllowed;
        }
        tmp = true === nsfwAllowed;
      }
      if (!tmp) {
        let nsfwAllowed1;
        if (null != lib) {
          nsfwAllowed1 = lib.nsfwAllowed;
        }
        tmp = null == nsfwAllowed1;
      }
      return tmp;
    });
    return found1.filter((application) => {
      let nsfwAllowed;
      if (null != lib) {
        nsfwAllowed = lib.nsfwAllowed;
      }
      let tmp3 = false === nsfwAllowed;
      if (tmp3) {
        tmp3 = lib(closure_2[9])(application.application.id);
      }
      return !tmp3;
    });
  }, items7);
};
