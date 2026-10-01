// Module ID: 13418
// Function ID: 13419
// Name: ActivateDeviceModal
// Dependencies: [19, 21, 13417, 6795, 6413, 1115, 13419, 6421, 2]
// Exports: default

// Module 13418 (ActivateDeviceModal)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const constants = { ACTIVATE_DEVICE: "activate-device" };
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = react.useMemo(() => {
    function onClose() {
      const obj = onClose(closure_1_2[2]);
      return obj.hideModal();
    }
    let obj = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      headerLeft() {
        let intl;
        const obj = { source: closure_2_1(closure_2_2[4]), onPress: onClose, accessibilityLabel: intl.string(userCode(closure_2_2[5]).t.cpT0Cq) };
        const HeaderActionButton = userCode(closure_2_2[3]).HeaderActionButton;
        intl = userCode(closure_2_2[5]).intl;
        return closure_2_4(HeaderActionButton, obj);
      },
      headerRight() {
        return null;
      },
      render() {
        const obj = { onClose, prefilledUserCode };
        return closure_2_4(userCode(closure_2_2[6]).ActivateDevice, obj);
      }
    };
    return { [closure_2_5.ACTIVATE_DEVICE]: obj };
  }, items);
  const Navigator = userCode(6421).Navigator;
  let intl = userCode(1115).intl;
  return <Navigator screens={memo} initialRouteName={constants.ACTIVATE_DEVICE} headerBackTitle={intl.string(userCode(1115).t["13/7kX"])} />;
};
