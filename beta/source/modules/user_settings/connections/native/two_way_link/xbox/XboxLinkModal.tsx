// Module ID: 8530
// Function ID: 8531
// Name: XboxLinkModal
// Dependencies: [19, 8531, 1074, 21, 6795, 6413, 8529, 1115, 8532, 8539, 8540, 8544, 8548, 8553, 8555, 8538, 8559, 6421, 2]
// Exports: default

// Module 8530 (XboxLinkModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 8529 */;
import XboxLinkConstants from "XboxLinkConstants" /* 8531 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onPress() {
    const obj = XboxLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
}
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  locationStack = locationStack.locationStack;
  let obj = twoWayLinkStyles(8538);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = react.useMemo(() => {
    function onClose() {
      const obj = closure_1_1(closure_1_2[6]);
      return obj.hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: CloseButton,
      headerTitle: blank,
      headerStyle: twoWayLinkStyles.navHeader,
      render() {
        return closure_1_6(closure_1_1(closure_1_2[8]), {});
      }
    };
    return {
      [closure_2_4.LANDING]: obj,
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(twoWayLinkStyles(closure_1_2[9]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return closure_1_6(closure_1_1(closure_1_2[10]), {});
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(twoWayLinkStyles(closure_1_2[9]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          let callbackCode;
          let callbackState;
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(closure_1_1(closure_1_2[11]), { callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(closure_1_1(closure_1_2[12]), {});
        }
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_6(closure_2_1(closure_2_2[13]), obj);
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_6(closure_2_1(closure_2_2[14]), obj);
        }
      }
    };
  }, items);
  const obj2 = twoWayLinkStyles(8559);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack);
  const Navigator = twoWayLinkStyles(6421).Navigator;
  const intl = twoWayLinkStyles(1115).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={XboxLinkModalScenes.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1115).t["13/7kX"])} />;
};
