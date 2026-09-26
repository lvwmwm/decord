// Module ID: 14895
// Function ID: 14896
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1372, 21, 7439, 7459, 504, 8488, 14896, 2]
// Exports: default

// Module 14895 (UserSettingsEditUserProfile)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7439 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7459 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8488 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const UserProfileEditFormDefault = tmp(14896);
const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default function UserSettingsEditUserProfile(arg0) {
  let tmp3 = useAnalyticsLocationsDefault;
  const tmp4 = stateFromStores;
  const items = [UserStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores) {
      maybeFetchUserProfileDefault(obj.id, obj.getAvatarURL(undefined, 80), { dispatchWait: true });
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const obj2 = { value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations, children: null };
    const obj3 = { currentUser: stateFromStores };
    const merged = Object.assign(arg0);
    obj2.children = jsx(UserProfileEditFormDefault, { currentUser: stateFromStores });
    tmp7 = jsx(tmp4(7439).AnalyticsLocationProvider, { value: tmp3(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations, children: null });
    const tmpResult = UserProfileEditFormDefault;
  }
  return tmp7;
};
