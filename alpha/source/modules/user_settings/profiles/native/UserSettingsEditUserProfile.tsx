// Module ID: 14814
// Function ID: 14815
// Name: UserSettingsEditUserProfile
// Dependencies: [19, 1390, 21, 558, 576, 6851, 6878, 504, 8311, 14815, 2]

// Module 14814 (UserSettingsEditUserProfile)
import Fragment from "Fragment" /* 21 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp4;
const UserProfileEditFormDefault = tmp4(14815);
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsEditUserProfile(arg0) {
  let currentUser;
  let stateFromStores;
  let tmp10;
  let tmp11;
  let tmp21;
  let tmp6;
  let tmp7;
  const obj = stateFromStores(576);
  const cResult = obj.c(11);
  const tmp5 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp5(AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = stateFromStores(504);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== stateFromStores) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    const items1 = [stateFromStores];
    cResult[2] = stateFromStores;
    cResult[3] = U;
    cResult[4] = items1;
    tmp11 = items1;
    tmp10 = U;
  } else {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    tmp11 = cResult[4];
  }
  const effect = react.useEffect(tmp10, tmp11);
  let tmp13 = null;
  if (null != stateFromStores) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    if (cResult[5] === stateFromStores) {
      class U {
        constructor() {
          if (null != stateFromStores) {
            const tmp3 = maybeFetchUserProfileDefault;
            tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
          }
        }
      }
      if (cResult[8] === analyticsLocations) {
        class U {
          constructor() {
            if (null != stateFromStores) {
              const tmp3 = maybeFetchUserProfileDefault;
              tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
            }
          }
        }
        tmp13 = tmp21;
      }
      const tmp23 = jsx(stateFromStores(6851).AnalyticsLocationProvider, { value: analyticsLocations, children: tmp14 });
      cResult[8] = analyticsLocations;
      cResult[9] = tmp14;
      cResult[10] = tmp23;
      tmp21 = tmp23;
    }
    UserProfileEditFormDefault;
    const merged = Object.assign(arg0);
    const tmp20 = <tmp4Result currentUser={stateFromStores} />;
    cResult[5] = stateFromStores;
    cResult[6] = arg0;
    cResult[7] = tmp20;
  }
  return tmp13;
}) : (function UserSettingsEditUserProfile(arg0) {
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
    const AnalyticsLocationProvider = tmp4(6851).AnalyticsLocationProvider;
    UserProfileEditFormDefault;
    const merged = Object.assign(arg0);
    tmp7 = <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserSettingsEditUserProfile.tsx");

export default tmp2;
