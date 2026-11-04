// Module ID: 15973
// Function ID: 15974
// Name: PremiumTryItOutModal
// Dependencies: [19, 1392, 1087, 1394, 21, 558, 576, 504, 7285, 7310, 15894, 15945, 1267, 8708, 1128, 6956, 7517, 9458, 15974, 11181, 2]

// Module 15973 (PremiumTryItOutModal)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import PremiumConstants from "PremiumConstants" /* 1394 */;
import NavigatorHeader from "NavigatorHeader" /* 6956 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7517 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8708 */;
import DiceIcon from "DiceIcon" /* 9458 */;
import UserProfileTryItOutEditFormDefault from "UserProfileTryItOutEditForm" /* 15974 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import Constants from "Constants" /* 1087 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let react = react_mod;
({ AnalyticEvents: hasOwnProperty, AnalyticsPages: metroRequire } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumTryItOutModal(initialTarget) {
  let analyticsLocations;
  let currentUser;
  let onPress;
  let sourceAnalyticsLocations;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp4;
  let tmp5;
  const tmp = initialTarget;
  let tmp2 = sourceAnalyticsLocations;
  let obj = initialTarget(sourceAnalyticsLocations[6]);
  const cResult = obj.c(26);
  initialTarget = initialTarget.initialTarget;
  const onClose = initialTarget.onClose;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = I;
    tmp4 = items;
    tmp5 = I;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = stateFromStores(tmp2[8]);
  ({ analyticsLocations, sourceAnalyticsLocations } = tmp8(stateFromStores(tmp2[9]).USER_SETTINGS_TRY_OUT_PREMIUM));
  tmp8(stateFromStores(tmp2[9]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const tmpResult2 = tmp(tmp2[10]);
  const shuffleButtonLocation = tmpResult2.useTryItOutMobileRefreshConfig("PremiumTryItOutModal").shuffleButtonLocation;
  const tmp10 = stateFromStores(tmp2[11])();
  react = tmp10;
  if (cResult[2] !== sourceAnalyticsLocations) {
    class R {
      constructor() {
        let obj3;
        const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
        obj3 = { page: metroRequire.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(hasOwnProperty.PREMIUM_UPSELL_VIEWED, obj2);
      }
    }
    const items1 = [sourceAnalyticsLocations];
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[2] = sourceAnalyticsLocations;
    cResult[3] = R;
    cResult[4] = items1;
    tmp12 = items1;
    tmp11 = R;
  } else {
    class R {
      constructor() {
        let obj3;
        const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
        obj3 = { page: metroRequire.USER_SETTINGS };
        const obj = AnalyticsUtilsDefault;
        obj.track(hasOwnProperty.PREMIUM_UPSELL_VIEWED, obj2);
      }
    }
    tmp12 = cResult[4];
  }
  const effect = react.useEffect(tmp11, tmp12);
  const obj4 = react;
  if (cResult[5] !== stateFromStores) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    const items2 = [stateFromStores];
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[5] = stateFromStores;
    cResult[6] = U;
    cResult[7] = items2;
    tmp15 = items2;
    tmp14 = U;
  } else {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    tmp15 = cResult[7];
  }
  const effect1 = obj4.useEffect(tmp14, tmp15);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    const stringResult = obj5.string(tmp(tmp2[14]).t.PxUx8e);
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[8] = stringResult;
    tmp17 = stringResult;
  } else {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
  }
  if (cResult[9] !== onClose) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    const headerCloseButton = obj6.getHeaderCloseButton(onClose);
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[10] = headerCloseButton;
  } else {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
  }
  if (cResult[11] === tmp10) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
    if (cResult[14] === stateFromStores) {
      class U {
        constructor() {
          if (null != stateFromStores) {
            const tmp3 = maybeFetchUserProfileDefault;
            tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
          }
        }
      }
      if (cResult[17] === tmp23) {
        class U {
          constructor() {
            if (null != stateFromStores) {
              const tmp3 = maybeFetchUserProfileDefault;
              tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
            }
          }
        }
      }
      let obj2 = { root: tmp25 };
      class I {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      tmp25[0] = tmp17;
      tmp25[1] = tmp19;
      tmp25[2] = tmp21;
      tmp25[3] = tmp23;
      cResult[17] = tmp23;
      cResult[18] = tmp19;
      cResult[19] = tmp21;
      cResult[20] = obj2;
    }
    const fn = function v() {
      let tmp2 = null;
      if (null != stateFromStores) {
        tmp2 = jsx(UserProfileTryItOutEditFormDefault, { currentUser: tmp, initialTarget });
      }
      return tmp2;
    };
    class I {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[14] = stateFromStores;
    cResult[15] = initialTarget;
    cResult[16] = fn;
  }
  if ("header" === shuffleButtonLocation) {
    class U {
      constructor() {
        if (null != stateFromStores) {
          const tmp3 = maybeFetchUserProfileDefault;
          tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
        }
      }
    }
  }
  cResult[11] = tmp10;
  cResult[12] = shuffleButtonLocation;
  cResult[13] = undefined;
}) : (function PremiumTryItOutModal(initialTarget) {
  initialTarget = initialTarget.initialTarget;
  const onClose = initialTarget.onClose;
  let stateFromStores;
  let shuffleButtonLocation;
  let obj = initialTarget(stateFromStores[7]);
  const items = [shuffleButtonLocation];
  stateFromStores = obj.useStateFromStores(items, () => shuffleButtonLocation.getCurrentUser());
  let tmp2 = onClose(stateFromStores[8]);
  const tmp2Result = tmp2(onClose(stateFromStores[9]).USER_SETTINGS_TRY_OUT_PREMIUM);
  const sourceAnalyticsLocations = tmp2Result.sourceAnalyticsLocations;
  const analyticsLocations = tmp2Result.analyticsLocations;
  let obj2 = initialTarget(stateFromStores[10]);
  shuffleButtonLocation = obj2.useTryItOutMobileRefreshConfig("PremiumTryItOutModal").shuffleButtonLocation;
  const tmp4 = onClose(stateFromStores[11])();
  let closure_5 = tmp4;
  const items1 = [sourceAnalyticsLocations];
  const effect = sourceAnalyticsLocations.useEffect(() => {
    let obj3;
    const obj2 = { type: PremiumUpsellTypes.PREMIUM_PROFILE_TRY_IT_OUT, location: obj3, location_stack: sourceAnalyticsLocations };
    obj3 = { page: metroRequire.USER_SETTINGS };
    const obj = AnalyticsUtilsDefault;
    obj.track(hasOwnProperty.PREMIUM_UPSELL_VIEWED, obj2);
  }, items1);
  const items2 = [stateFromStores];
  const effect1 = sourceAnalyticsLocations.useEffect(() => {
    if (null != stateFromStores) {
      const tmp3 = maybeFetchUserProfileDefault;
      tmp3(stateFromStores.id, stateFromStores.getAvatarURL(undefined, 80), {});
    }
  }, items2);
  const items3 = [stateFromStores, initialTarget, onClose, tmp4, shuffleButtonLocation];
  const memo = sourceAnalyticsLocations.useMemo(() => {
    let fn;
    let intl;
    let obj2;
    let onPress;
    const root = {
      title: intl.string(intl3.t.PxUx8e),
      headerLeft: obj2.getHeaderCloseButton(onClose),
      headerRight: fn,
      render() {
        let tmp2 = null;
        if (null != closure_1_2) {
          tmp2 = jsx(onClose(stateFromStores[18]), { currentUser: tmp, initialTarget });
        }
        return tmp2;
      }
    };
    intl = intl3.intl;
    fn = undefined;
    obj2 = NavigatorHeader;
    if ("header" === shuffleButtonLocation) {
      fn = () => {
        const HeaderActionButton = initialTarget(stateFromStores[16]).HeaderActionButton;
        const intl = initialTarget(stateFromStores[14]).intl;
        const intl2 = initialTarget(stateFromStores[14]).intl;
        return <HeaderActionButton IconComponent={initialTarget(stateFromStores[17]).DiceIcon} IconComponentSize="md" onPress={onPress} accessibilityLabel={intl.string(initialTarget(stateFromStores[14]).t.VzqqFC)} accessibilityHint={intl2.string(initialTarget(stateFromStores[14]).t.bBRdiB)} />;
      };
    }
    return { root };
  }, items3);
  const AnalyticsLocationProvider = initialTarget(stateFromStores[8]).AnalyticsLocationProvider;
  return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
});
const result = size.fileFinishedImporting("modules/profile_customization/native/PremiumTryItOutModal.tsx");

export default tmp3;
