// Module ID: 8976
// Function ID: 70675
// Name: CloseButton
// Dependencies: [31, 8977, 653, 33, 5788, 7696, 8975, 1212, 8978, 8983, 8984, 8988, 9071, 9076, 9077, 8982, 9026, 5517, 2]
// Exports: default

// Module 8976 (CloseButton)
import result from "result";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function CloseButton() {
  const obj = {
    source: importDefault(7696),
    onPress() {
      return outer1_1(outer1_2[6]).hideModal();
    }
  };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  return jsx(require(5788) /* HeaderActionButton */.HeaderActionButton, {
    source: importDefault(7696),
    onPress() {
      return outer1_1(outer1_2[6]).hideModal();
    }
  });
}
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let obj = twoWayLinkStyles(8982);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => (function getScreens(twoWayLinkStyles) {
    function onClose() {
      return outer3_1(outer3_2[6]).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: outer2_7,
      headerTitle: blank,
      headerStyle: twoWayLinkStyles.navHeader,
      render() {
        return outer3_6(outer3_1(outer3_2[8]), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer2_7,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return outer3_6(twoWayLinkStyles(outer3_2[9]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return outer3_6(outer3_1(outer3_2[10]), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer2_7,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return outer3_6(twoWayLinkStyles(outer3_2[9]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return outer3_6(outer3_1(outer3_2[11]), { callbackCode, callbackState });
      }
    };
    return {
      [outer2_4.LANDING]: obj,
      [outer2_4.PRE_CONNECT]: obj,
      [outer2_4.DISCORD_CONSENT]: obj,
      [outer2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: outer2_7,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return outer3_6(outer3_1(outer3_2[12]), {});
        }
      },
      [outer2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: outer2_7,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return outer3_6(outer3_1(outer3_2[13]), { onClose });
        }
      },
      [outer2_4.ERROR]: {
        headerLeft: blank,
        headerRight: outer2_7,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return outer3_6(outer3_1(outer3_2[14]), { onClose });
        }
      }
    };
  })(twoWayLinkStyles), items);
  const accountLinkStepTracking = twoWayLinkStyles(9026).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING };
  const intl = twoWayLinkStyles(1212).intl;
  obj.headerBackTitle = intl.string(twoWayLinkStyles(1212).t["13/7kX"]);
  return jsx(twoWayLinkStyles(5517).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING });
};
