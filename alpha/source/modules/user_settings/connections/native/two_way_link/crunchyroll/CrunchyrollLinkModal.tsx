// Module ID: 14596
// Function ID: 14597
// Name: CrunchyrollLinkModal
// Dependencies: [19, 14597, 1072, 21, 7552, 8351, 14595, 1114, 14598, 9711, 14600, 14602, 14603, 14605, 9710, 14583, 7163, 2]
// Exports: default

// Module 14596 (CrunchyrollLinkModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7552 */;
import AssetRegistryDefault from "AssetRegistry" /* 8351 */;
import CrunchyrollLinkModalActionCreatorsDefault from "CrunchyrollLinkModalActionCreators" /* 14595 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14597 */;
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
  let obj = twoWayLinkStyles(9710);
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
  const obj2 = twoWayLinkStyles(14583);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack);
  const Navigator = twoWayLinkStyles(7163).Navigator;
  const intl = twoWayLinkStyles(1114).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={constants.LANDING} headerBackTitle={intl.string(twoWayLinkStyles(1114).t["13/7kX"])} />;
};
