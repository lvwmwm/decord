// Module ID: 16819
// Function ID: 16820
// Name: onModalClose
// Dependencies: [19, 21, 16818, 5315, 5309, 1236, 6049, 8068, 16820, 16821, 16833, 16834, 5822, 2]
// Exports: default

// Module 16819 (onModalClose)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function onModalClose() {
  importDefault(16818).close();
}
function HeaderBackButton(arg0) {
  require(5315) /* useNavigatorBackPressHandler */.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = require(5315) /* useNavigatorBackPressHandler */;
  const intl = require(1236) /* getSystemLocale */.intl;
  return require(5309) /* HeaderBackImage */.getHeaderTextButton(intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("module_16818").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: null, onPress: null, accessibilityLabel: null };
      obj[0] = callback2(8068);
      obj[1] = closure_5;
      const intl = callback(1236).intl;
      obj[2] = intl.string(callback(1236).t.cpT0Cq);
      return callback3(callback(6049).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16821), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16833), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(16834), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: null, headerBackTitle: null };
  obj[1] = require(16820) /* EnableCommunityModalSteps */.EnableCommunityModalSteps.STEP_1;
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  return jsx(require(5822) /* NavigationStack */.Navigator, { screens: memo, initialRouteName: null, headerBackTitle: null });
};
