// Module ID: 10380
// Function ID: 10381
// Name: CloseButton
// Dependencies: [19, 10381, 676, 21, 5902, 7809, 10379, 1236, 10382, 10386, 10387, 10391, 10432, 10437, 10439, 10385, 10443, 5650, 2]
// Exports: default

// Module 10380 (CloseButton)
import noop from "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = importDefault(7809);
  obj[1] = function onPress() {
    return callback(table[6]).hideModal();
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  return jsx(require(5902) /* HeaderActionButton */.HeaderActionButton, { source: null, onPress: null, accessibilityLabel: null });
}
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(10385);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return callback(10379).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerTitle: blank,
      headerStyle: onClose.navHeader,
      render() {
        return callback2(callback(10382), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10386).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return callback2(callback(10387), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10386).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(10391), { callbackCode, callbackState });
      }
    };
    return {
      [outer1_4.LANDING]: obj,
      [outer1_4.PRE_CONNECT]: obj,
      [outer1_4.DISCORD_CONSENT]: obj,
      [outer1_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return callback2(callback(10432), {});
        }
      },
      [outer1_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return outer1_6(outer1_1(outer1_2[13]), { onClose });
        }
      },
      [outer1_4.ERROR]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return outer1_6(outer1_1(outer1_2[14]), { onClose });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = twoWayLinkStyles(10443).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1236).intl;
  obj[3] = intl.string(twoWayLinkStyles(1236).t["13/7kX"]);
  return jsx(twoWayLinkStyles(5650).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
};
