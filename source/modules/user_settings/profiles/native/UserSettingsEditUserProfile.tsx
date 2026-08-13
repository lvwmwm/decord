// Module ID: 13966
// Function ID: 13967
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1922, 21, 5768, 5788, 589, 8356, 13967, 2]
// Exports: default

// Module 13966 (UserSettingsEditUserProfile)
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
    obj[0] = tmp3(importDefault(5788).USER_SETTINGS_USER_PROFILE).analyticsLocations;
    obj = { currentUser: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    obj[1] = jsx(importDefault(13967), { currentUser: null });
    tmp7 = jsx(stateFromStores(5768).AnalyticsLocationProvider, { currentUser: null });
    const tmpResult = importDefault(13967);
  }
  return tmp7;
};
