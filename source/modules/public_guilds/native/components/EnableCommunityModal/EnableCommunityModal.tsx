// Module ID: 16643
// Function ID: 16644
// Name: onModalClose
// Dependencies: [19, 21, 16642, 5259, 5253, 1236, 5929, 7950, 16644, 16645, 16657, 16658, 5704, 2]
// Exports: default

// Module 16643 (onModalClose)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onModalClose() {
  importDefault(16642).close();
}
function HeaderBackButton(arg0) {
  require(5259) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = require(5259) /* useNavigatorBackPressHandler */;
  const intl = require(1236) /* getSystemLocale */.intl;
  return require(5253) /* HeaderBackImage */.getHeaderTextButton(intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("module_16642").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: null, onPress: null, accessibilityLabel: null };
      obj[0] = callback2(7950);
      obj[1] = closure_5;
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(5929).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16645), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16657), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16658), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: null, headerBackTitle: null };
  obj[1] = require(16644) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1;
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5704) /* NavigationStack */.Navigator, { screens: memo, initialRouteName: null, headerBackTitle: null });
};
