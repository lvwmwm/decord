// Module ID: 13775
// Function ID: 13776
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1874, 21, 5595, 5615, 589, 8090, 13776, 2]
// Exports: default

// Module 13775 (UserSettingsEditUserProfile)
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let obj = stateFromStores(589);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = React.useEffect(() => {
    if (null != stateFromStores) {
      outer1_1(outer1_2[6])(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
      const tmp3 = outer1_1(outer1_2[6]);
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    obj = { value: null, children: null };
    obj[0] = tmp3(importDefault(5615).USER_SETTINGS_USER_PROFILE).analyticsLocations;
    obj = { currentUser: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    obj[1] = jsx(importDefault(13776), { currentUser: null });
    tmp7 = jsx(stateFromStores(5595).AnalyticsLocationProvider, { currentUser: null });
    const tmpResult = importDefault(13776);
  }
  return tmp7;
};
