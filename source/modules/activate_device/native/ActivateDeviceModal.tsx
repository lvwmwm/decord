// Module ID: 12881
// Function ID: 100026
// Name: ActivateDeviceModal
// Dependencies: [31, 33, 12880, 5788, 7607, 1212, 12882, 5519, 2]
// Exports: default

// Module 12881 (ActivateDeviceModal)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { ACTIVATE_DEVICE: "activate-device" };
const result = require("module_12880").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = React.useMemo(() => (function getScreens(userCode) {
    let closure_0 = userCode;
    function onClose() {
      return outer3_1(outer3_2[2]).hideModal();
    }
    return {
      [outer2_5.ACTIVATE_DEVICE]: {
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          const obj = { source: outer3_1(outer3_2[4]), onPress: onClose };
          const intl = userCode(outer3_2[5]).intl;
          obj.accessibilityLabel = intl.string(userCode(outer3_2[5]).t.cpT0Cq);
          return outer3_4(userCode(outer3_2[3]).HeaderActionButton, obj);
        },
        headerRight() {
          return null;
        },
        render() {
          return outer3_4(userCode(outer3_2[6]).ActivateDevice, { onClose, prefilledUserCode: closure_0 });
        }
      }
    };
  })(userCode), items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE };
  let intl = userCode(1212).intl;
  obj.headerBackTitle = intl.string(userCode(1212).t["13/7kX"]);
  return jsx(userCode(5519).Navigator, { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE });
};
