// Module ID: 9373
// Function ID: 9374
// Name: XboxLinkModal
// Dependencies: [19, 9374, 1078, 21, 558, 568, 9372, 7653, 7270, 1119, 9375, 9382, 9383, 9387, 9391, 9396, 9398, 9381, 9402, 7278, 2]

// Module 9373 (XboxLinkModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef7270 from "module_7270" /* 7270 */;
import Navigator from "Navigator" /* 7278 */;
import HeaderActionButton from "HeaderActionButton" /* 7653 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9372 */;
import XboxLinkLandingDefault from "XboxLinkLanding" /* 9375 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9381 */;
import XboxLinkPreConnectDefault from "XboxLinkPreConnect" /* 9383 */;
import XboxLinkDiscordConsentDefault from "XboxLinkDiscordConsent" /* 9387 */;
import XboxLinkSuccessDefault from "XboxLinkSuccess" /* 9391 */;
import XboxLinkEducationDefault from "XboxLinkEducation" /* 9396 */;
import XboxLinkErrorDefault from "XboxLinkError" /* 9398 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 9402 */;
import noop from "module_19" /* 19 */;

require = fn;
function getScreens(headerStyle) {
  function onClose() {
    return XboxLinkModalActionCreatorsDefault.hideModal();
  }
  function blank() {
    return null;
  }
  return {
    [closure_4.LANDING]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(XboxLinkLandingDefault, {});
      }
    },
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(onClose(9382).TwoWayLinkStepHeader, { idx: 1, total: 2 });
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
        return jsx(onClose(9382).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
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
const XboxLinkModalScenes = fn(9374).XboxLinkModalScenes;
const PlatformTypes = fn(1078).PlatformTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerRight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef7270, onPress: first, accessibilityLabel: null };
    const intl = tmp(1119).intl;
    obj2.accessibilityLabel = intl.string(tmp(1119).t.cpT0Cq);
    const tmp8 = jsx(tmp(7653).HeaderActionButton, { source: _modDef7270, onPress: first, accessibilityLabel: null });
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (() => {
  const obj = {
    source: _modDef7270,
    onPress() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7270,
    onPress() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((locationStack) => {
  const cResult = c.c(6);
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  if (cResult[0] !== twoWayLinkStyles) {
    const tmp7 = getScreens(twoWayLinkStyles);
    cResult[0] = twoWayLinkStyles;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  const accountLinkStepTracking = useAccountLinkStepTracking.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["13/7kX"]);
    cResult[2] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === accountLinkStepTracking) {
    if (cResult[4] === tmp5) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const tmp12 = jsx(Navigator.Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: tmp9 });
  cResult[3] = accountLinkStepTracking;
  cResult[4] = tmp5;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((locationStack) => {
  let twoWayLinkStyles;
  twoWayLinkStyles = twoWayLinkStyles(9381).useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => getScreens(twoWayLinkStyles), items);
  const obj = twoWayLinkStyles(9381);
  const accountLinkStepTracking = twoWayLinkStyles(9402).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1119).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1119).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7278).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
});
