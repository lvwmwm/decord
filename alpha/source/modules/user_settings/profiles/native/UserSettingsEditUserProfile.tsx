// Module ID: 16429
// Function ID: 16430
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1383, 21, 7326, 7351, 504, 8758, 16430, 2]
// Exports: default

// Module 16429 (UserSettingsEditUserProfile)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7326 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8758 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

let tmp;
const UserProfileEditFormDefault = tmp(16430);
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
    const AnalyticsLocationProvider = tmp4(7326).AnalyticsLocationProvider;
    UserProfileEditFormDefault;
    const merged = Object.assign(arg0);
    tmp7 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  return tmp7;
};
