// Module ID: 13896
// Function ID: 13897
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1903, 21, 5728, 5748, 589, 8308, 13897, 2]
// Exports: default

// Module 13896 (UserSettingsEditUserProfile)
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
    obj[0] = tmp3(importDefault(5748).USER_SETTINGS_USER_PROFILE).analyticsLocations;
    obj = { currentUser: null };
    obj[0] = stateFromStores;
    const merged = Object.assign(arg0);
    obj[1] = jsx(importDefault(13897), { currentUser: null });
    tmp7 = jsx(stateFromStores(5728).AnalyticsLocationProvider, { currentUser: null });
    const tmpResult = importDefault(13897);
  }
  return tmp7;
};
