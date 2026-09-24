// Module ID: 9415
// Function ID: 9416
// Name: CrunchyrollLinkModal
// Dependencies: [19, 9416, 1078, 21, 558, 568, 9414, 7653, 7270, 1119, 9417, 9382, 9419, 9421, 9422, 9424, 9381, 9402, 7278, 2]

// Module 9415 (CrunchyrollLinkModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef7270 from "module_7270" /* 7270 */;
import Navigator from "Navigator" /* 7278 */;
import HeaderActionButton from "HeaderActionButton" /* 7653 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9381 */;
import useAccountLinkStepTracking from "useAccountLinkStepTracking" /* 9402 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 9414 */;
import CrunchyrollLinkLandingDefault from "CrunchyrollLinkLanding" /* 9417 */;
import CrunchyrollLinkPreConnectDefault from "CrunchyrollLinkPreConnect" /* 9419 */;
import CrunchyrollLinkDiscordConsentDefault from "CrunchyrollLinkDiscordConsent" /* 9421 */;
import CrunchyrollLinkSuccessDefault from "CrunchyrollLinkSuccess" /* 9422 */;
import CrunchyrollLinkErrorDefault from "CrunchyrollLinkError" /* 9424 */;
import noop from "module_19" /* 19 */;

require = fn;
function getScreens(headerStyle) {
  function onClose() {
    return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
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
        return jsx(CrunchyrollLinkLandingDefault, {});
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
        return jsx(CrunchyrollLinkPreConnectDefault, {});
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
const constants = fn(9416).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1078).PlatformTypes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerRight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
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
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7270,
    onPress() {
      return CrunchyrollLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

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
  const accountLinkStepTracking = useAccountLinkStepTracking.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
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
  const tmp12 = jsx(Navigator.Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: constants.LANDING, headerBackTitle: tmp9 });
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
  const accountLinkStepTracking = twoWayLinkStyles(9402).useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1119).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1119).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7278).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
});
