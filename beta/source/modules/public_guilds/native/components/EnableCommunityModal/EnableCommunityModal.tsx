// Module ID: 18112
// Function ID: 18113
// Name: EnableCommunityModal
// Dependencies: [19, 21, 18111, 558, 568, 5877, 5871, 1119, 7653, 7270, 18113, 18114, 18126, 18127, 7278, 2]

// Module 18112 (EnableCommunityModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5877 */;
import Navigator from "Navigator" /* 7278 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 18111 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 18113 */;
import noop from "module_19" /* 19 */;

require = fn;
function onModalClose() {
  EnableCommunityModalActionCreatorsDefault.close();
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const headerLeft = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      EnableCommunityModalActionCreatorsDefault.close();
      return true;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(first);
  if (cResult[1] !== arg0) {
    const intl = tmp(1119).intl;
    const tmp8 = tmp(5871).getHeaderTextButton(intl.string(tmp(1119).t["13/7kX"]), onModalClose)(arg0);
    cResult[1] = arg0;
    cResult[2] = tmp8;
    let tmp6 = tmp8;
    const tmpResult2 = tmp(5871);
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : ((arg0) => {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    EnableCommunityModalActionCreatorsDefault.close();
    return true;
  });
  const intl = util.intl;
  return NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function headerRight() {
      const obj = { source: closure_1_1(7270), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1119).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1119).t.cpT0Cq);
      return closure_1_4(closure_1_0(7653).HeaderActionButton, obj);
    }
    const obj2 = {};
    const obj3 = {
      headerRight,
      headerLeft,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18114), {});
        }
    };
    obj2[tmp(18113).EnableCommunityModalSteps.STEP_1] = obj3;
    const obj4 = {
      headerRight,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18126), {});
        }
    };
    obj2[tmp(18113).EnableCommunityModalSteps.STEP_2] = obj4;
    const obj5 = {
      headerRight,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18127), {});
        }
    };
    obj2[tmp(18113).EnableCommunityModalSteps.STEP_3] = obj5;
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { screens: first, initialRouteName: tmp(18113).EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
    const intl = tmp(1119).intl;
    obj6.headerBackTitle = intl.string(tmp(1119).t["13/7kX"]);
    const tmp8 = jsx(tmp(7278).Navigator, { screens: first, initialRouteName: tmp(18113).EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(7270), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1119).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1119).t.cpT0Cq);
      return closure_1_4(closure_1_0(7653).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18114), {});
        }
      },
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18126), {});
        }
      },
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18127), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
});
