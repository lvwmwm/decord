// Module ID: 9404
// Function ID: 9405
// Name: PlayStationLinkModal
// Dependencies: [19, 9405, 21, 558, 568, 9403, 7653, 7270, 1119, 9406, 9382, 9408, 9410, 9412, 9413, 9381, 9402, 7278, 2]

// Module 9404 (PlayStationLinkModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef7270 from "module_7270" /* 7270 */;
import HeaderActionButton from "HeaderActionButton" /* 7653 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 9381 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 9403 */;
import PlayStationLinkLanding from "PlayStationLinkLanding" /* 9406 */;
import PlayStationLinkPreConnect from "PlayStationLinkPreConnect" /* 9408 */;
import PlayStationLinkDiscordConsent from "PlayStationLinkDiscordConsent" /* 9410 */;
import PlayStationLinkSuccess from "PlayStationLinkSuccess" /* 9412 */;
import PlayStationLinkError from "PlayStationLinkError" /* 9413 */;
import noop from "module_19" /* 19 */;

require = fn;
function getScreens(platformType, headerStyle) {
  function onClose() {
    return onClose(9403).hideModal();
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
        return jsx(PlayStationLinkLanding.PlayStationLinkLanding, { platformType });
      }
    },
    [closure_4.PRE_CONNECT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(platformType(9382).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return jsx(PlayStationLinkPreConnect.PlayStationLinkPreConnect, { platformType });
      }
    },
    [closure_4.DISCORD_CONSENT]: {
      headerLeft: blank,
      headerRight,
      headerStyle: headerStyle.navHeader,
      headerTitle() {
        return jsx(platformType(9382).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        ({ callbackCode, callbackState } = arg0);
        return jsx(PlayStationLinkDiscordConsent.PlayStationLinkDiscordConsent, { platformType, callbackCode, callbackState });
      }
    },
    [closure_4.SUCCESS]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render() {
        return jsx(PlayStationLinkSuccess.PlayStationLinkSuccess, { onClose });
      }
    },
    [closure_4.ERROR]: {
      headerLeft: blank,
      headerRight,
      headerTitle: blank,
      headerStyle: headerStyle.navHeader,
      render(errorCode) {
        return jsx(PlayStationLinkError.PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
      }
    }
  };
}
const constants = fn(9405).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerRight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
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
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7270,
    onPress() {
      return PlayStationLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(7);
  ({ platformType, locationStack } = arg0);
  const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
  if (cResult[0] === platformType) {
    if (cResult[1] === twoWayLinkStyles) {
      let tmp5 = cResult[2];
    }
    const accountLinkStepTracking = tmp(9402).useAccountLinkStepTracking(platformType, locationStack);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1119).intl;
      const stringResult = intl.string(tmp(1119).t["13/7kX"]);
      cResult[3] = stringResult;
      let tmp9 = stringResult;
    } else {
      tmp9 = cResult[3];
    }
    if (cResult[4] === accountLinkStepTracking) {
      if (cResult[5] === tmp5) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj3 = { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: constants.LANDING, headerBackTitle: tmp9 };
    const tmp14 = jsx(tmp(7278).Navigator, { onStateChange: accountLinkStepTracking, screens: tmp5, initialRouteName: constants.LANDING, headerBackTitle: tmp9 });
    cResult[4] = accountLinkStepTracking;
    cResult[5] = tmp5;
    cResult[6] = tmp14;
    tmp11 = tmp14;
    const tmpResult = tmp(9402);
  }
  const tmp6 = getScreens(platformType, twoWayLinkStyles);
  cResult[0] = platformType;
  cResult[1] = twoWayLinkStyles;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((platformType) => {
  platformType = platformType.platformType;
  const twoWayLinkStyles = platformType(9381).useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = noop.useMemo(() => getScreens(platformType, twoWayLinkStyles), items);
  const obj = platformType(9381);
  const accountLinkStepTracking = platformType(9402).useAccountLinkStepTracking(platformType, platformType.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = platformType(1119).intl;
  obj3.headerBackTitle = intl.string(platformType(1119).t["13/7kX"]);
  return jsx(platformType(7278).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
});
