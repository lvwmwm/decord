// Module ID: 10616
// Function ID: 10617
// Name: CloseButton
// Dependencies: [19, 10617, 676, 21, 6049, 8068, 10615, 1236, 10618, 10546, 10620, 10622, 10623, 10625, 10545, 10603, 5822, 2]
// Exports: default

// Module 10616 (CloseButton)
import noop from "noop";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
function CloseButton() {
  const obj = { source: null, onPress: null, accessibilityLabel: null };
  obj[0] = importDefault(8068);
  obj[1] = function onPress() {
    return callback(table[6]).hideModal();
  };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  return jsx(require(6049) /* HeaderActionButton */.HeaderActionButton, { source: null, onPress: null, accessibilityLabel: null });
}
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  let obj = twoWayLinkStyles(10545);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => {
    function onClose() {
      return callback(10615).hideModal();
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
        return callback2(callback(10618), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10546).TwoWayLinkStepHeader, { idx: 1, total: 2 });
      },
      render() {
        return callback2(callback(10620), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: outer1_7,
      headerStyle: onClose.navHeader,
      headerTitle() {
        return callback2(onClose(10546).TwoWayLinkStepHeader, { idx: 2, total: 2 });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(10622), { callbackCode, callbackState });
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
          return outer1_6(outer1_1(outer1_2[12]), { onClose });
        }
      },
      [outer1_4.ERROR]: {
        headerLeft: blank,
        headerRight: outer1_7,
        headerTitle: blank,
        headerStyle: onClose.navHeader,
        render() {
          return outer1_6(outer1_1(outer1_2[13]), { onClose });
        }
      }
    };
  }, items);
  const accountLinkStepTracking = twoWayLinkStyles(10603).useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1236).intl;
  obj[3] = intl.string(twoWayLinkStyles(1236).t["13/7kX"]);
  return jsx(twoWayLinkStyles(5822).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING, headerBackTitle: null });
};
