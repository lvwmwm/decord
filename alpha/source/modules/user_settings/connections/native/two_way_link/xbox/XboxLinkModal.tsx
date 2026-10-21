// Module ID: 9568
// Function ID: 9569
// Name: XboxLinkModal
// Dependencies: [19, 9569, 1087, 21, 558, 576, 9567, 7462, 8090, 1128, 9570, 9577, 9578, 9582, 13971, 13974, 13976, 9576, 13980, 7074, 2]

// Module 9568 (XboxLinkModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import Navigator2 from "Navigator" /* 7074 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7462 */;
import AssetRegistryDefault from "AssetRegistry" /* 8090 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9567 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9569 */;
import XboxLinkLandingDefault from "XboxLinkLanding" /* 9570 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9576 */;
import XboxLinkPreConnectDefault from "XboxLinkPreConnect" /* 9578 */;
import XboxLinkDiscordConsentDefault from "XboxLinkDiscordConsent" /* 9582 */;
import XboxLinkSuccessDefault from "XboxLinkSuccess" /* 13971 */;
import XboxLinkEducationDefault from "XboxLinkEducation" /* 13974 */;
import XboxLinkErrorDefault from "XboxLinkError" /* 13976 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 13980 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function getScreens(headerStyle) {
  function onClose() {
    const obj = XboxLinkModalActionCreatorsDefault;
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
      return jsx(XboxLinkLandingDefault, {});
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
        return jsx(XboxLinkPreConnectDefault, {});
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
        return jsx(XboxLinkDiscordConsentDefault, { callbackCode, callbackState });
      }
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkSuccessDefault, {});
      }
    },
    [closure_4.EDUCATION]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkEducationDefault, { onClose });
      }
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkErrorDefault, { onClose });
      }
    }
  };
}
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
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
      const obj = XboxLinkModalActionCreatorsDefault;
      return obj.hideModal();
    }
    cResult[0] = onClose;
    first = onClose;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const HeaderActionButton = tmp(7462).HeaderActionButton;
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
    const obj = XboxLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function XboxLinkModal(locationStack) {
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
  const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack);
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
  const tmp12 = jsx(Navigator2.Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: tmp9 });
  cResult[3] = accountLinkStepTracking;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : (function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  locationStack = locationStack.locationStack;
  const obj = twoWayLinkStyles(9576);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = react.useMemo(() => getScreens(twoWayLinkStyles), items);
  const obj2 = twoWayLinkStyles(13980);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack);
  const Navigator = twoWayLinkStyles(7074).Navigator;
  const intl = twoWayLinkStyles(1128).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={XboxLinkModalScenes.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1128).t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default tmp2;
