// Module ID: 13302
// Function ID: 13303
// Name: ActivateDeviceModal
// Dependencies: [19, 21, 13301, 6072, 8093, 1236, 13303, 5844, 2]
// Exports: default

// Module 13302 (ActivateDeviceModal)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { ACTIVATE_DEVICE: "activate-device" };
const result = require("module_13301").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = React.useMemo(() => {
    function onClose() {
      return onClose(table[2]).hideModal();
    }
    return {
      [outer1_5.ACTIVATE_DEVICE]: {
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          const obj = { source: null, onPress: null, accessibilityLabel: null };
          obj[0] = onClose(outer1_2[4]);
          obj[1] = onClose;
          const intl = callback(outer1_2[5]).intl;
          obj[2] = intl.string(callback(outer1_2[5]).t.cpT0Cq);
          return outer1_4(callback(outer1_2[3]).HeaderActionButton, obj);
        },
        headerRight() {
          return null;
        },
        render() {
          return outer1_4(callback(outer1_2[6]).ActivateDevice, { onClose, prefilledUserCode: callback });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null };
  let intl = userCode(1236).intl;
  obj[2] = intl.string(userCode(1236).t["13/7kX"]);
  return jsx(userCode(5844).Navigator, { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null });
};
