// Module ID: 13587
// Function ID: 102980
// Name: route
// Dependencies: [891158528, 131072, 528023552, 889192448, 553648157, 3439329280, 3607101467, 2516582452, 2684354568]

// Module 13587 (route)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  IconComponent: arg1(dependencyMap[6]).EyeSlashIcon,
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.93ZDWE);
  },
  useDescription: function useAccountIgnoredUsersSettingDescription() {
    let obj = arg1(dependencyMap[3]);
    const items = [closure_2];
    const stateFromStoresArray = obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs());
    const intl = arg1(dependencyMap[4]).intl;
    obj = { numberOfIgnoredUsers: stateFromStoresArray.length };
    return intl.format(arg1(dependencyMap[4]).t.rXUeOl, obj);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.IGNORED_USERS,
  getComponent() {
    return arg1(dependencyMap[7]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/AccountIgnoredUsersSetting.tsx");

export default route;
