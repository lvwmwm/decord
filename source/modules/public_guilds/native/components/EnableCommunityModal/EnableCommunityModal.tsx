// Module ID: 16496
// Function ID: 16497
// Name: onModalClose
// Dependencies: [19, 21, 16495, 5149, 5143, 1236, 6749, 7696, 16497, 16498, 16510, 16511, 5570, 2]
// Exports: default

// Module 16496 (onModalClose)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onModalClose() {
  importDefault(16495).close();
}
function HeaderBackButton(arg0) {
  require(5149) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = require(5149) /* useNavigatorBackPressHandler */;
  const intl = require(1236) /* getSystemLocale */.intl;
  return require(5143) /* HeaderBackImage */.getHeaderTextButton(intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("module_16495").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: null, onPress: null, accessibilityLabel: null };
      obj[0] = callback2(7696);
      obj[1] = closure_5;
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(6749).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16498), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16510), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16511), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: null, headerBackTitle: null };
  obj[1] = require(16497) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1;
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5570) /* NavigationStack */.Navigator, { screens: memo, initialRouteName: null, headerBackTitle: null });
};
