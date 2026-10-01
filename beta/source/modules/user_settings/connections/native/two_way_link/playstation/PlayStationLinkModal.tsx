// Module ID: 8561
// Function ID: 8562
// Name: PlayStationLinkModal
// Dependencies: [19, 8562, 21, 6795, 6413, 8560, 1115, 8563, 8539, 8565, 8567, 8569, 8570, 8538, 8559, 6421, 2]
// Exports: default

// Module 8561 (PlayStationLinkModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1115 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import PlayStationLinkModalActionCreatorsDefault from "PlayStationLinkModalActionCreators" /* 8560 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 8562 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CloseButton() {
  const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  const intl = intl2.intl;
  return <HeaderActionButton source={AssetRegistryDefault} onPress={function onPress() {
    const obj = PlayStationLinkModalActionCreatorsDefault;
    return obj.hideModal();
  }} accessibilityLabel={intl.string(intl2.t.cpT0Cq)} />;
}
const constants = PlayStationLinkConstants.PlayStationLinkModalScenes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  const locationStack = platformType.locationStack;
  let obj = platformType(8538);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const items = [platformType, twoWayLinkStyles];
  const memo = react.useMemo(() => {
    function onClose() {
      const obj = onClose(closure_1_2[5]);
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
        return closure_2_5(platformType(closure_2_2[7]).PlayStationLinkLanding, obj);
      }
    };
    return {
      [closure_2_4.LANDING]: obj,
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(closure_1_2[8]).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          const obj = { platformType };
          return closure_2_5(platformType(closure_2_2[9]).PlayStationLinkPreConnect, obj);
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_5(platformType(closure_1_2[8]).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          let callbackCode;
          let callbackState;
          ({ callbackCode, callbackState } = arg0);
          const obj = { platformType, callbackCode, callbackState };
          return closure_2_5(platformType(closure_2_2[10]).PlayStationLinkDiscordConsent, obj);
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          const obj = { onClose };
          return closure_2_5(platformType(closure_2_2[11]).PlayStationLinkSuccess, obj);
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          const obj = { onClose, errorCode: errorCode.errorCode };
          return closure_2_5(platformType(closure_2_2[12]).PlayStationLinkError, obj);
        }
      }
    };
  }, items);
  const obj2 = platformType(8559);
  const accountLinkStepTracking = obj2.useAccountLinkStepTracking(platformType, locationStack);
  const Navigator = platformType(6421).Navigator;
  const intl = platformType(1115).intl;
  return <Navigator onStateChange={accountLinkStepTracking} screens={memo} initialRouteName={constants.LANDING} headerBackTitle={intl.string(platformType(1115).t["13/7kX"])} />;
};
