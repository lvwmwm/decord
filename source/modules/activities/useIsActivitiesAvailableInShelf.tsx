// Module ID: 10542
// Function ID: 82357
// Name: useIsActivitiesAvailableInShelf
// Dependencies: []
// Exports: default

// Module 10542 (useIsActivitiesAvailableInShelf)
let closure_3 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(arg0, arg1) {
  arg1 = arg0;
  const isActivitiesEnabledForCurrentPlatform = arg1(dependencyMap[1]).useIsActivitiesEnabledForCurrentPlatform();
  const importDefault = isActivitiesEnabledForCurrentPlatform;
  let tmp3 = null != arg0;
  const obj = arg1(dependencyMap[1]);
  if (tmp3) {
    tmp3 = "" !== arg0;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  const dependencyMap = tmp3;
  const items = [arg0, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = React.useEffect(() => {
    let tmp = tmp3;
    if (tmp3) {
      tmp = isActivitiesEnabledForCurrentPlatform;
    }
    if (tmp) {
      let obj = arg0(tmp3[3]);
      obj = { guildId: arg0 };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
};
