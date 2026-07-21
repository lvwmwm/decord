// Module ID: 11931
// Function ID: 92271
// Name: useTrackUserProfileActivityView
// Dependencies: []
// Exports: default

// Module 11931 (useTrackUserProfileActivityView)
let closure_2 = importDefault(dependencyMap[0]);
({ useEffect: closure_3, useState: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/user_profile/hooks/native/useTrackUserProfileActivityView.tsx");

export default function useTrackUserProfileActivityView(arg0) {
  let onAction;
  ({ userId: closure_0, onAction } = arg0);
  const dependencyMap = onAction;
  let tmp3;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => fetchingUserOutbox.isFetchingUserOutbox(closure_0));
  const tmp2 = callback(callback2(false), 2);
  const callback = tmp2[1];
  tmp3 = !stateFromStores && !tmp2[0];
  const items1 = [tmp3, onAction];
  tmp3(() => {
    if (tmp3) {
      const obj = { action: "VIEW_ACTIVITY_CARD" };
      onAction(obj);
      callback(true);
      const tmp3 = callback;
    }
  }, items1);
};
