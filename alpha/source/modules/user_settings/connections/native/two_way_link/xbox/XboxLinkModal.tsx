// Module ID: 6907
// Function ID: 6908
// Name: XboxLinkModal
// Dependencies: [19, 6908, 1071, 21, 6909, 6912, 6906, 1112, 6913, 6944, 6945, 6952, 6960, 6965, 6967, 6924, 6971, 6972, 2]
// Exports: default

// Module 6907 (XboxLinkModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 6906 */;
import XboxLinkConstants from "XboxLinkConstants" /* 6908 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6909 */;
import AssetRegistryDefault from "AssetRegistry" /* 6912 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onClose() {
    const obj = XboxLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
}
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(startAtSignIn) {
  let flag = startAtSignIn.startAtSignIn;
  const locationStack = startAtSignIn.locationStack;
  if (flag === undefined) {
    flag = false;
  }
  let obj = flag(6924);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [twoWayLinkStyles, flag];
  const tmp6 = flag ? XboxLinkModalScenes.PRE_CONNECT : XboxLinkModalScenes.LANDING;
  const memo = react.useMemo(() => {
    let closure_0 = flag;
    function onClose() {
      const obj = onClose(closure_1_2[6]);
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
        return closure_1_6(twoWayLinkStyles(closure_1_2[8]), {});
      }
    };
    return {
      [closure_2_4.LANDING]: obj,
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(flag(closure_1_2[9]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          const obj = { autoStart };
          return closure_2_6(twoWayLinkStyles(closure_2_2[10]), obj);
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(flag(closure_1_2[9]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          let callbackCode;
          let callbackState;
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(twoWayLinkStyles(closure_1_2[11]), { callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(twoWayLinkStyles(closure_1_2[12]), {});
        }
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_6(twoWayLinkStyles(closure_2_2[13]), obj);
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_6(twoWayLinkStyles(closure_2_2[14]), obj);
        }
      }
    };
  }, items);
  const tmpResult = flag(6971);
  const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack, tmp6);
  const Navigator = tmp(6972).Navigator;
  const intl = tmp(1112).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={tmp6} headerBackTitle={intl.string(flag(1112).t["13/7kX"])} />;
};
