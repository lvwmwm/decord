// Module ID: 8899
// Function ID: 70454
// Name: CloseButton
// Dependencies: [31, 8900, 33, 6695, 7640, 8898, 1212, 8901, 8871, 8903, 8905, 8908, 8910, 8870, 8914, 5517, 2]
// Exports: default

// Module 8899 (CloseButton)
import result from "result";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes";
import { jsx } from "jsxProd";

const require = arg1;
function CloseButton() {
  const obj = {
    source: importDefault(7640),
    onPress() {
      return outer1_1(outer1_2[5]).hideModal();
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  return jsx(require(6695) /* HeaderActionButton */.HeaderActionButton, {
    source: importDefault(7640),
    onPress() {
      return outer1_1(outer1_2[5]).hideModal();
    }
  });
}
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  let obj = platformType(8870);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = React.useMemo(() => (function getScreens(platformType, twoWayLinkStyles) {
    let closure_0 = platformType;
    function onClose() {
      return twoWayLinkStyles(outer3_2[5]).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: outer2_6,
      headerTitle: blank,
      headerStyle: twoWayLinkStyles.navHeader,
      render() {
        return outer3_5(platformType(outer3_2[7]).PlayStationLinkLanding, { platformType: closure_0 });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer2_6,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return outer3_5(platformType(outer3_2[8]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return outer3_5(platformType(outer3_2[9]).PlayStationLinkPreConnect, { platformType: closure_0 });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer2_6,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return outer3_5(platformType(outer3_2[8]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return outer3_5(platformType(outer3_2[10]).PlayStationLinkDiscordConsent, { platformType: closure_0, callbackCode, callbackState });
      }
    };
    return {
      [outer2_4.LANDING]: obj,
      [outer2_4.PRE_CONNECT]: obj,
      [outer2_4.DISCORD_CONSENT]: obj,
      [outer2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: outer2_6,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return outer3_5(platformType(outer3_2[11]).PlayStationLinkSuccess, { onClose });
        }
      },
      [outer2_4.ERROR]: {
        headerLeft: blank,
        headerRight: outer2_6,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          return outer3_5(platformType(outer3_2[12]).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  })(platformType, twoWayLinkStyles), items);
  const accountLinkStepTracking = platformType(8914).useAccountLinkStepTracking(platformType, platformType.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING };
  const intl = platformType(1212).intl;
  obj.headerBackTitle = intl.string(platformType(1212).t["13/7kX"]);
  return jsx(platformType(5517).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING });
};
