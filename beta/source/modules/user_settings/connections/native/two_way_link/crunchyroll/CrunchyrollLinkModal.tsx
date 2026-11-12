// Module ID: 14912
// Function ID: 14913
// Name: CrunchyrollLinkModal
// Dependencies: [19, 14913, 1072, 21, 7663, 8462, 14911, 1113, 14914, 9854, 14916, 14918, 14919, 14921, 9853, 14899, 7264, 2]
// Exports: default

// Module 14912 (CrunchyrollLinkModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7663 */;
import AssetRegistryDefault from "AssetRegistry" /* 8462 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 14911 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14913 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onClose() {
    const obj = CrunchyrollLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
}
const constants = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default function CrunchyrollLinkModal(locationStack) {
  let twoWayLinkStyles;
  locationStack = locationStack.locationStack;
  let obj = twoWayLinkStyles(9853);
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
          const obj = { onClose };
          return closure_2_6(closure_2_1(closure_2_2[12]), obj);
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_6(closure_2_1(closure_2_2[13]), obj);
        }
      }
    };
  }, items);
  const obj2 = twoWayLinkStyles(14899);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
  const Navigator = twoWayLinkStyles(7264).Navigator;
  const intl = twoWayLinkStyles(1113).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={constants.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1113).t["13/7kX"])} />;
};
