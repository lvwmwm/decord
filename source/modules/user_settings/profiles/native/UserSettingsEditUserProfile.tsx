// Module ID: 13611
// Function ID: 104596
// Name: UserSettingsEditUserProfile
// Dependencies: [31, 1849, 33, 5462, 5482, 566, 7975, 13612, 2]
// Exports: default

// Module 13611 (UserSettingsEditUserProfile)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let obj = stateFromStores(566);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => outer1_4.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      const obj = { dispatchWait: true };
      outer1_1(outer1_2[6])(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), obj);
      const tmp3 = outer1_1(outer1_2[6]);
    }
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { value: tmp(importDefault(5482).USER_SETTINGS_USER_PROFILE).analyticsLocations };
    obj = { currentUser: stateFromStores };
    const merged = Object.assign(arg0);
    obj.children = jsx(importDefault(13612), { currentUser: stateFromStores });
    tmp4 = jsx(stateFromStores(5462).AnalyticsLocationProvider, { currentUser: stateFromStores });
    const tmp9 = importDefault(13612);
  }
  return tmp4;
};
