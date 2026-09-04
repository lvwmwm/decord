// Module ID: 17582
// Function ID: 17583
// Name: onModalClose
// Dependencies: [19, 21, 17581, 5585, 5579, 1233, 7315, 6932, 17583, 17584, 17596, 17597, 6940, 2]
// Exports: default

// Module 17582 (onModalClose)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import HeaderBackImage from "HeaderBackImage" /* 5579 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5585 */;
import NavigationStack from "NavigationStack" /* 6940 */;
import _modDef17581 from "module_17581" /* 17581 */;
import EnableCommunityModalSteps from "EnableCommunityModalSteps" /* 17583 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onModalClose() {
  _modDef17581.close();
}
function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = useNavigatorBackPressHandler;
  const intl = getSystemLocale.intl;
  return HeaderBackImage.getHeaderTextButton(intl.string(getSystemLocale.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: callback2(6932), onPress: closure_5, accessibilityLabel: null };
      const intl = callback(1233).intl;
      obj[2] = intl.string(callback(1233).t.cpT0Cq);
      return callback3(callback(7315).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17584), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17596), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17597), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};
