// Module ID: 15742
// Function ID: 15743
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1388, 21, 7401, 7420, 504, 7954, 15743, 2]
// Exports: default

// Module 15742 (UserSettingsEditUserProfile)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7401 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7420 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7954 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import size from "module_2" /* 2 */;

let tmp;
const UserProfileEditFormDefault = tmp(15743);
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
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    const AnalyticsLocationProvider = tmp4(7401).AnalyticsLocationProvider;
    UserProfileEditFormDefault;
    const merged = Object.assign(arg0);
    tmp7 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  return tmp7;
};
