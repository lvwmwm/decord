// Module ID: 14172
// Function ID: 14173
// Name: ActivateDeviceModal
// Dependencies: [19, 21, 14171, 7651, 7269, 1115, 14173, 7277, 2]
// Exports: default

// Module 14172 (ActivateDeviceModal)
import _modDef7269 from "module_7269" /* 7269 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const constants = { ACTIVATE_DEVICE: "activate-device" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  const items = [userCode];
  const memo = noop.useMemo(() => {
    const prefilledUserCode = userCode;
    function onClose() {
      return onClose(dependencyMap[2]).hideModal();
    }
    return {
      [closure_2_5.ACTIVATE_DEVICE]: {
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          const obj = { source: _modDef7269, onPress: onClose, accessibilityLabel: null };
          const intl = userCode(1115).intl;
          obj.accessibilityLabel = intl.string(userCode(1115).t.cpT0Cq);
          return jsx(userCode(7651).HeaderActionButton, { source: _modDef7269, onPress: onClose, accessibilityLabel: null });
        },
        headerRight() {
          return null;
        },
        render() {
          return jsx(userCode(14173).ActivateDevice, { onClose, prefilledUserCode });
        }
      }
    };
  }, items);
  let obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null };
  let intl = userCode(1115).intl;
  obj.headerBackTitle = intl.string(userCode(1115).t["13/7kX"]);
  return jsx(userCode(7277).Navigator, { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE, headerBackTitle: null });
};
