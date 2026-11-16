// Module ID: 14901
// Function ID: 14902
// Name: PlayStationLinkModal
// Dependencies: [19, 14902, 21, 7663, 8462, 14900, 1113, 14903, 9854, 14905, 14907, 14909, 14910, 9853, 14899, 7264, 2]
// Exports: default

// Module 14901 (PlayStationLinkModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7663 */;
import AssetRegistryDefault from "AssetRegistry" /* 8462 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 14900 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 14902 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onClose() {
    const obj = PlayStationLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
}
const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  let flag = platformType.startAtSignIn;
  const locationStack = platformType.locationStack;
  if (flag === undefined) {
    flag = false;
  }
  let twoWayLinkStyles;
  let obj = platformType(twoWayLinkStyles[13]);
  twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles, flag];
  const tmp6 = flag ? constants.PRE_CONNECT : constants.LANDING;
  const memo = react.useMemo(() => {
    let closure_1 = flag;
    function onClose() {
      const obj = autoStart(onClose[5]);
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
        const obj = { platformType };
        return closure_2_5(platformType(twoWayLinkStyles[7]).PlayStationLinkLanding, obj);
      }
    };
    return {
      [closure_2_4.LANDING]: obj,
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(twoWayLinkStyles[8]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          const obj = { platformType, autoStart };
          return closure_2_5(platformType(twoWayLinkStyles[9]).PlayStationLinkPreConnect, obj);
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(twoWayLinkStyles[8]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          let callbackCode;
          let callbackState;
          ({ callbackCode, callbackState } = arg0);
          const obj = { platformType, callbackCode, callbackState };
          return closure_2_5(platformType(twoWayLinkStyles[10]).PlayStationLinkDiscordConsent, obj);
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_5(platformType(twoWayLinkStyles[11]).PlayStationLinkSuccess, obj);
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          const obj = { onClose, errorCode: errorCode.errorCode };
          return closure_2_5(platformType(twoWayLinkStyles[12]).PlayStationLinkError, obj);
        }
      }
    };
  }, items);
  const tmpResult = platformType(twoWayLinkStyles[14]);
  const accountLinkStepTracking = tmpResult.useAccountLinkStepTracking(platformType, locationStack, tmp6);
  const Navigator = tmp(tmp2[15]).Navigator;
  const intl = tmp(tmp2[6]).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={tmp6} headerBackTitle={intl.string(platformType(twoWayLinkStyles[6]).t["13/7kX"])} />;
};
