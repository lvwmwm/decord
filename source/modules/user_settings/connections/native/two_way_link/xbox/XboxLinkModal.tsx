// Module ID: 10427
// Function ID: 10428
// Name: CloseButton
// Dependencies: [19, 10428, 676, 21, 5948, 7967, 10426, 1236, 10429, 10433, 10434, 10438, 10479, 10484, 10486, 10432, 10490, 5723, 2]
// Exports: default

// Module 10427 (CloseButton)
import noop from "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = importDefault(7967);
  obj[1] = function onPress() {
    return callback(table[6]).hideModal();
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  return jsx(require(5948) /* HeaderActionButton */.HeaderActionButton, { source: null, onPress: null, accessibilityLabel: null });
}
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(10432);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return callback(10426).hideModal();
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
        return callback2(callback(10429), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10433).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return callback2(callback(10434), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10433).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(10438), { callbackCode, callbackState });
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
          return callback2(callback(10479), {});
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
  const accountLinkStepTracking = twoWayLinkStyles(10490).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1236).intl;
  obj[3] = intl.string(twoWayLinkStyles(1236).t["13/7kX"]);
  return jsx(twoWayLinkStyles(5723).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
};
