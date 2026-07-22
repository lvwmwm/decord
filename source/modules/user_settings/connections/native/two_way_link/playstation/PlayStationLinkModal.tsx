// Module ID: 8965
// Function ID: 70719
// Name: CloseButton
// Dependencies: []
// Exports: default

// Module 8965 (CloseButton)
function CloseButton() {
  const obj = {
    source: importDefault(dependencyMap[4]),
    onPress() {
      return callback(closure_2[5]).hideModal();
    }
  };
  const intl = arg1(dependencyMap[6]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[6]).t.cpT0Cq);
  return jsx(arg1(dependencyMap[3]).HeaderActionButton, obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).PlayStationLinkModalScenes;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkModal.tsx");

export default function PlayStationLinkModal(platformType) {
  platformType = platformType.platformType;
  const arg1 = platformType;
  let obj = arg1(dependencyMap[13]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const importDefault = twoWayLinkStyles;
  const items = [platformType, twoWayLinkStyles];
  const memo = React.useMemo(() => function getScreens(platformType, twoWayLinkStyles) {
    function onClose() {
      return onClose(closure_2[5]).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: closure_6,
      headerTitle: blank,
      headerStyle: twoWayLinkStyles.navHeader,
      render() {
        return callback(arg0(closure_2[7]).PlayStationLinkLanding, { platformType: arg0 });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_6,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return callback(arg0(closure_2[8]).TwoWayLinkStepHeader, { "Null": -2923740127827069600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001257033793555892 });
      },
      render() {
        return callback(arg0(closure_2[9]).PlayStationLinkPreConnect, { platformType: arg0 });
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_6,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return callback(arg0(closure_2[8]).TwoWayLinkStepHeader, { "Null": "GeoTiffDirectory", "Null": "GeoTiffDoubleParams" });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return callback(arg0(closure_2[10]).PlayStationLinkDiscordConsent, { platformType: arg0, callbackCode, callbackState });
      }
    };
    return {
      [closure_4.LANDING]: obj,
      [closure_4.PRE_CONNECT]: obj,
      [closure_4.DISCORD_CONSENT]: obj,
      [closure_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: closure_6,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return callback(arg0(closure_2[11]).PlayStationLinkSuccess, { onClose });
        }
      },
      [closure_4.ERROR]: {
        headerLeft: blank,
        headerRight: closure_6,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render(errorCode) {
          return callback(errorCode(closure_2[12]).PlayStationLinkError, { onClose, errorCode: errorCode.errorCode });
        }
      }
    };
  }(platformType, twoWayLinkStyles), items);
  const accountLinkStepTracking = arg1(dependencyMap[14]).useAccountLinkStepTracking(platformType, platformType.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING };
  const intl = arg1(dependencyMap[6]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[6]).t.13/7kX);
  return jsx(arg1(dependencyMap[15]).Navigator, obj);
};
