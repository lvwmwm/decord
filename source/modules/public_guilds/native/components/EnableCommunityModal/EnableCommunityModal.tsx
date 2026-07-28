// Module ID: 16467
// Function ID: 128384
// Name: onModalClose
// Dependencies: [31, 33, 16466, 5127, 5121, 1212, 6731, 7676, 16468, 16469, 16481, 16482, 5552, 2]
// Exports: default

// Module 16467 (onModalClose)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
function onModalClose() {
  importDefault(16466).close();
}
function HeaderBackButton(arg0) {
  require(5127) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    outer1_5();
    return true;
  });
  const obj = require(5127) /* useNavigatorBackPressHandler */;
  const intl = require(1212) /* getSystemLocale */.intl;
  return require(5121) /* HeaderBackImage */.getHeaderTextButton(intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("module_16466").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

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
  let obj = { screens: memo, initialRouteName: require(16468) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1 };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5552) /* NavigationStack */.Navigator, { screens: memo, initialRouteName: require(16468) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1 });
};
