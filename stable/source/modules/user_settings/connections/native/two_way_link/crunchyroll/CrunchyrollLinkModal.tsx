// Module ID: 13861
// Function ID: 13862
// Name: CrunchyrollLinkModal
// Dependencies: [19, 13862, 1087, 21, 558, 576, 13860, 7365, 7995, 1128, 13863, 9518, 13865, 13867, 13868, 13870, 9517, 13848, 6965, 2]

// Module 13861 (CrunchyrollLinkModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import Navigator2 from "Navigator" /* 6965 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7365 */;
import AssetRegistryDefault from "AssetRegistry" /* 7995 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9517 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 13848 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 13860 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 13862 */;
import CrunchyrollLinkLandingDefault from "CrunchyrollLinkLanding" /* 13863 */;
import CrunchyrollLinkPreConnectDefault from "CrunchyrollLinkPreConnect" /* 13865 */;
import CrunchyrollLinkDiscordConsentDefault from "CrunchyrollLinkDiscordConsent" /* 13867 */;
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess" /* 13868 */;
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError" /* 13870 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getScreens(headerStyle) {
  function onClose() {
    const obj = CrunchyrollLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }
  function blank() {
    return null;
  }
  let obj = {
    headerLeft: blank,
    headerRight,
    headerTitle: blank,
    headerStyle: headerStyle.navHeader,
    render() {
      return jsx(CrunchyrollLinkLandingDefault, {});
    }
  };
  return {
    [closure_4.LANDING]: obj,
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(dependencyMap[11]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return jsx(CrunchyrollLinkPreConnectDefault, {});
      }
    },
    [closure_4.DISCORD_CONSENT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(dependencyMap[11]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return jsx(CrunchyrollLinkDiscordConsentDefault, { callbackCode, callbackState });
      }
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(CrunchyrollLinkSuccessDefault, { onClose });
      }
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(CrunchyrollLinkErrorDefault, { onClose });
      }
    }
  };
}
const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const headerRight = ReactCompilerGating.isReactCompilerEnabled() ? (function CloseButton() {
  let first;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function onClose() {
      const obj = CrunchyrollLinkModalActionCreatorsDefault;
      return obj.hideModal();
    }
    cResult[0] = onClose;
    first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const HeaderActionButton = tmp(7365).HeaderActionButton;
    const intl = tmp(1128).intl;
    const tmp8 = <HeaderActionButton source={AssetRegistryDefault} onPress={first} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onClose() {
    const obj = CrunchyrollLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CrunchyrollLinkModal(locationStack) {
  let tmp5;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(6);
  locationStack = locationStack.locationStack;
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  if (cResult[0] !== twoWayLinkStyles) {
    const tmp7 = getScreens(twoWayLinkStyles);
    cResult[0] = twoWayLinkStyles;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = useAccountLinkStepTracking;
  const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl2.t["13/7kX"]);
    cResult[2] = stringResult;
    tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === accountLinkStepTracking) {
    let tmp11;
    if (cResult[4] === tmp5) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const tmp12 = jsx(Navigator2.Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: constants.LANDING, headerBackTitle: tmp9 });
  cResult[3] = accountLinkStepTracking;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  locationStack = locationStack.locationStack;
  const obj = twoWayLinkStyles(9517);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = react.useMemo(() => getScreens(twoWayLinkStyles), items);
  const obj2 = twoWayLinkStyles(13848);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
  const Navigator = twoWayLinkStyles(6965).Navigator;
  const intl = twoWayLinkStyles(1128).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={constants.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1128).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default tmp2;
