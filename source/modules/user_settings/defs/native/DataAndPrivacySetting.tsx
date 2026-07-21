// Module ID: 14400
// Function ID: 108629
// Name: route
// Dependencies: []

// Module 14400 (route)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.OAuOHD);
  },
  parent: null,
  IconComponent: arg1(dependencyMap[6]).ShieldLockIcon,
  screen: obj,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = callback(closure_1[2]).fetchConsents();
      const obj = callback(closure_1[2]);
      const harvestStatus = callback(closure_1[3]).fetchHarvestStatus();
      return true;
    }, []);
  }
};
obj = {
  route: arg1(dependencyMap[1]).UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return arg1(dependencyMap[7]).default;
  }
};
const route = obj.createRoute(obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
