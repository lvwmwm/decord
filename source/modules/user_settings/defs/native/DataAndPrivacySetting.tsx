// Module ID: 14393
// Function ID: 108606
// Name: route
// Dependencies: [0, 0, 0, 0, 4294967295, 4294967295, 4294967295, 0, 0]

// Module 14393 (route)
import closure_2 from "result";
import result from "result";

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
  route: require("result").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return arg1(dependencyMap[7]).default;
  }
};
const route = obj.createRoute(obj);
result = result.fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default route;
