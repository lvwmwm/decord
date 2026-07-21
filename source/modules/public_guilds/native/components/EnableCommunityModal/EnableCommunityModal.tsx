// Module ID: 16232
// Function ID: 125468
// Name: onModalClose
// Dependencies: [0, 0, 0, 4294967295, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 16232 (onModalClose)
import closure_3 from "result";
import { jsx } from "result";
import result from "result";

function onModalClose() {
  importDefault(dependencyMap[2]).close();
}
function HeaderBackButton(arg0) {
  arg1(dependencyMap[3]).useNavigatorBackPressHandler(() => {
    callback();
    return true;
  });
  const obj = arg1(dependencyMap[3]);
  const intl = arg1(dependencyMap[5]).intl;
  return arg1(dependencyMap[4]).getHeaderTextButton(intl.string(arg1(dependencyMap[5]).t.13/7kX), onModalClose)(arg0);
}
result = result.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => function getScreens() {
    function headerRight() {
      const obj = { source: callback2(closure_2[7]), onPress: closure_5 };
      const intl = callback(closure_2[5]).intl;
      obj.accessibilityLabel = intl.string(callback(closure_2[5]).t.cpT0Cq);
      return callback3(callback(closure_2[6]).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(closure_2[9]), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(closure_2[10]), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(closure_2[11]), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }(), []);
  const obj = { screens: memo, initialRouteName: arg1(dependencyMap[8]).EnableCommunityModalSteps.STEP_1 };
  const intl = arg1(dependencyMap[5]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[5]).t.13/7kX);
  return jsx(arg1(dependencyMap[12]).Navigator, obj);
};
