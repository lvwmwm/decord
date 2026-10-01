// Module ID: 14145
// Function ID: 14146
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1372, 21, 6583, 6603, 504, 7632, 14146, 2]
// Exports: default

// Module 14145 (UserSettingsEditUserProfile)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6583 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

let tmp;
const UserProfileEditFormDefault = tmp(14146);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let currentUser;
  let stateFromStores;
  let tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations;
  const items = [UserStore];
  const obj = stateFromStores(504);
  const tmp4 = stateFromStores;
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const AnalyticsLocationProvider = tmp4(6583).AnalyticsLocationProvider;
    UserProfileEditFormDefault;
    const merged = Object.assign(arg0);
    tmp7 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  return tmp7;
};
