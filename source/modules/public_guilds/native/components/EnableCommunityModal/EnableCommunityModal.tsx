// Module ID: 16357
// Function ID: 127684
// Name: onModalClose
// Dependencies: [31, 33, 16356, 5093, 5087, 1212, 5788, 7607, 16358, 16359, 16371, 16372, 5519, 2]
// Exports: default

// Module 16357 (onModalClose)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function onModalClose() {
  importDefault(16356).close();
}
function HeaderBackButton(arg0) {
  require(5093) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    outer1_5();
    return true;
  });
  const obj = require(5093) /* useNavigatorBackPressHandler */;
  const intl = require(1212) /* getSystemLocale */.intl;
  return require(5087) /* HeaderBackImage */.getHeaderTextButton(intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("module_16356").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => (function getScreens() {
    function headerRight() {
      const obj = { source: outer3_1(outer3_2[7]), onPress: outer3_5 };
      const intl = outer3_0(outer3_2[5]).intl;
      obj.accessibilityLabel = intl.string(outer3_0(outer3_2[5]).t.cpT0Cq);
      return outer3_4(outer3_0(outer3_2[6]).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: outer2_6,
      headerTitle() {
        return null;
      },
      render() {
        return outer3_4(outer3_1(outer3_2[9]), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return outer3_4(outer3_1(outer3_2[10]), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return outer3_4(outer3_1(outer3_2[11]), {});
      }
    };
    return { [outer2_0(outer2_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [outer2_0(outer2_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [outer2_0(outer2_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  })(), []);
  let obj = { screens: memo, initialRouteName: require(16358) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1 };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5519) /* NavigationStack */.Navigator, { screens: memo, initialRouteName: require(16358) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1 });
};
