// Module ID: 9166
// Function ID: 9167
// Name: CrunchyrollLinkModal
// Dependencies: [19, 9167, 1085, 21, 558, 576, 9165, 7079, 5009, 1126, 9168, 9121, 9170, 9172, 9173, 9175, 9120, 9164, 6679, 2]

// Module 9166 (CrunchyrollLinkModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import AssetRegistryDefault from "AssetRegistry" /* 5009 */;
import Navigator2 from "Navigator" /* 6679 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7079 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9120 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 9164 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 9165 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 9167 */;
import CrunchyrollLinkLandingDefault from "CrunchyrollLinkLanding" /* 9168 */;
import CrunchyrollLinkPreConnectDefault from "CrunchyrollLinkPreConnect" /* 9170 */;
import CrunchyrollLinkDiscordConsentDefault from "CrunchyrollLinkDiscordConsent" /* 9172 */;
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess" /* 9173 */;
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError" /* 9175 */;
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
    const HeaderActionButton = tmp(7079).HeaderActionButton;
    const intl = tmp(1126).intl;
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
    const intl = tmp(1126).intl;
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
  const obj = twoWayLinkStyles(9120);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = react.useMemo(() => getScreens(twoWayLinkStyles), items);
  const obj2 = twoWayLinkStyles(9164);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
  const Navigator = twoWayLinkStyles(6679).Navigator;
  const intl = twoWayLinkStyles(1126).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={constants.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1126).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default tmp2;
