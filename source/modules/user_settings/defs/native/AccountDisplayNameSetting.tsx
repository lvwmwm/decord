// Module ID: 13538
// Function ID: 102737
// Name: route
// Dependencies: []

// Module 13538 (route)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.9AjdkD);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.ACCOUNT,
  useTrailing: function useAccountDisplayNameSettingTrailing() {
    const items = [closure_2];
    return arg1(dependencyMap[3]).useStateFromStores(items, () => {
      const currentUser = currentUser.getCurrentUser();
      let globalName;
      if (null != currentUser) {
        globalName = currentUser.globalName;
      }
      return globalName;
    });
  },
  screen: obj
};
obj = {
  route: arg1(dependencyMap[2]).UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return arg1(dependencyMap[6]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/AccountDisplayNameSetting.tsx");

export default route;
