// Module ID: 13430
// Function ID: 102038
// Name: UserSettingsEditUserProfile
// Dependencies: []
// Exports: default

// Module 13430 (UserSettingsEditUserProfile)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const arg1 = stateFromStores;
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      const obj = { dispatchWait: true };
      callback(closure_2[6])(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), obj);
      const tmp3 = callback(closure_2[6]);
    }
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { value: tmp(importDefault(dependencyMap[4]).USER_SETTINGS_USER_PROFILE).analyticsLocations };
    obj = { currentUser: stateFromStores };
    const merged = Object.assign(arg0);
    obj.children = jsx(importDefault(dependencyMap[7]), obj);
    tmp4 = jsx(arg1(dependencyMap[3]).AnalyticsLocationProvider, obj);
    const tmp9 = importDefault(dependencyMap[7]);
  }
  return tmp4;
};
