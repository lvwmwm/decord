// Module ID: 8977
// Function ID: 70738
// Name: CloseButton
// Dependencies: []
// Exports: default

// Module 8977 (CloseButton)
function CloseButton() {
  const obj = {
    source: importDefault(dependencyMap[5]),
    onPress() {
      return callback(closure_2[6]).hideModal();
    }
  };
  const intl = arg1(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[7]).t.cpT0Cq);
  return jsx(arg1(dependencyMap[4]).HeaderActionButton, obj);
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = arg1(dependencyMap[1]).CrunchyrollLinkModalScenes;
const PlatformTypes = arg1(dependencyMap[2]).PlatformTypes;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkModal.tsx");

export default function CrunchyrollLinkModal(locationStack) {
  let obj = arg1(dependencyMap[14]);
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const arg1 = twoWayLinkStyles;
  const items = [twoWayLinkStyles];
  const memo = React.useMemo(() => function getScreens(twoWayLinkStyles) {
    function onClose() {
      return callback(closure_2[6]).hideModal();
    }
    function blank() {
      return null;
    }
    let obj = {
      headerLeft: blank,
      headerRight: closure_7,
      headerTitle: blank,
      headerStyle: twoWayLinkStyles.navHeader,
      render() {
        return callback2(callback(closure_2[8]), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_7,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return callback2(onClose(closure_2[9]).TwoWayLinkStepHeader, { "Null": "Lightbox Frame", "Null": "EdgeHTML" });
      },
      render() {
        return callback2(callback(closure_2[10]), {});
      }
    };
    obj = {
      headerLeft: blank,
      headerRight: closure_7,
      headerStyle: twoWayLinkStyles.navHeader,
      headerTitle() {
        return callback2(onClose(closure_2[9]).TwoWayLinkStepHeader, { "Null": false, "Null": false });
      },
      render(arg0) {
        let callbackCode;
        let callbackState;
        ({ callbackCode, callbackState } = arg0);
        return callback2(callback(closure_2[11]), { callbackCode, callbackState });
      }
    };
    return {
      [closure_4.LANDING]: obj,
      [closure_4.PRE_CONNECT]: obj,
      [closure_4.DISCORD_CONSENT]: obj,
      [closure_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: closure_7,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return callback2(callback(closure_2[12]), { onClose });
        }
      },
      [closure_4.ERROR]: {
        headerLeft: blank,
        headerRight: closure_7,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return callback2(callback(closure_2[13]), { onClose });
        }
      }
    };
  }(twoWayLinkStyles), items);
  const accountLinkStepTracking = arg1(dependencyMap[15]).useAccountLinkStepTracking(PlatformTypes.CRUNCHYROLL, locationStack.locationStack);
  obj = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: constants.LANDING };
  const intl = arg1(dependencyMap[7]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[7]).t.13/7kX);
  return jsx(arg1(dependencyMap[16]).Navigator, obj);
};
