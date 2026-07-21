// Module ID: 11986
// Function ID: 92640
// Name: useUserProfileWidgets
// Dependencies: []
// Exports: default

// Module 11986 (useUserProfileWidgets)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_profile/hooks/useUserProfileWidgets.tsx");

export default function useUserProfileWidgets(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => {
    let tmp2 = null != arg0;
    if (tmp2) {
      tmp2 = tmp === arg0;
    }
    return tmp2;
  }, items1);
  const obj = arg1(dependencyMap[3]);
  const items2 = [closure_4];
  const stateFromStores1 = arg1(dependencyMap[3]).useStateFromStores(items2, () => pendingWidgets.getPendingWidgets());
  const obj2 = arg1(dependencyMap[3]);
  const items3 = [closure_3];
  const items4 = [arg0];
  const stateFromStoresArray = arg1(dependencyMap[3]).useStateFromStoresArray(items3, () => {
    if (null == arg0) {
      return [];
    } else {
      const userProfile = userProfile.getUserProfile(arg0);
      let widgets;
      if (null != userProfile) {
        widgets = userProfile.widgets;
      }
      if (null == widgets) {
        widgets = [];
      }
      return widgets;
    }
  }, items4);
  let tmp4 = stateFromStoresArray;
  if (stateFromStores) {
    tmp4 = stateFromStoresArray;
    if (null !== stateFromStores1) {
      tmp4 = stateFromStores1;
    }
  }
  return tmp4;
};
