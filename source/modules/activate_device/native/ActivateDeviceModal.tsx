// Module ID: 12767
// Function ID: 97870
// Name: ActivateDeviceModal
// Dependencies: []
// Exports: default

// Module 12767 (ActivateDeviceModal)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let closure_5 = { ACTIVATE_DEVICE: "activate-device" };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/activate_device/native/ActivateDeviceModal.tsx");

export default function ActivateDeviceModal(userCode) {
  userCode = userCode.userCode;
  const arg1 = userCode;
  const items = [userCode];
  const memo = React.useMemo(() => function getScreens(userCode) {
    function onClose() {
      return onClose(closure_2[2]).hideModal();
    }
    return {
      [closure_5.ACTIVATE_DEVICE]: {
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          const obj = { source: onClose(closure_2[4]), onPress: onClose };
          const intl = arg0(closure_2[5]).intl;
          obj.accessibilityLabel = intl.string(arg0(closure_2[5]).t.cpT0Cq);
          return callback(arg0(closure_2[3]).HeaderActionButton, obj);
        },
        headerRight() {
          return null;
        },
        render() {
          return callback(arg0(closure_2[6]).ActivateDevice, { onClose, prefilledUserCode: arg0 });
        }
      }
    };
  }(userCode), items);
  const obj = { screens: memo, initialRouteName: constants.ACTIVATE_DEVICE };
  const intl = arg1(dependencyMap[5]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[5]).t.13/7kX);
  return jsx(arg1(dependencyMap[7]).Navigator, obj);
};
