// Module ID: 18101
// Function ID: 18102
// Name: EnableCommunityModal
// Dependencies: [19, 21, 18100, 558, 568, 5845, 5839, 1119, 7621, 7238, 18102, 18103, 18115, 18116, 7246, 2]

// Module 18101 (EnableCommunityModal)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5845 */;
import Navigator from "Navigator" /* 7246 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 18100 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 18102 */;
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
    const tmp8 = tmp(5839).getHeaderTextButton(intl.string(tmp(1119).t["13/7kX"]), onModalClose)(arg0);
    cResult[1] = arg0;
    cResult[2] = tmp8;
    let tmp6 = tmp8;
    const tmpResult2 = tmp(5839);
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
      const obj = { source: closure_1_1(7238), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1119).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1119).t.cpT0Cq);
      return closure_1_4(closure_1_0(7621).HeaderActionButton, obj);
    }
    const obj2 = {};
    const obj3 = {
      headerRight,
      headerLeft,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18103), {});
        }
    };
    obj2[tmp(18102).EnableCommunityModalSteps.STEP_1] = obj3;
    const obj4 = {
      headerRight,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18115), {});
        }
    };
    obj2[tmp(18102).EnableCommunityModalSteps.STEP_2] = obj4;
    const obj5 = {
      headerRight,
      headerTitle() {
          return null;
        },
      render() {
          return closure_1_4(closure_1_1(18116), {});
        }
    };
    obj2[tmp(18102).EnableCommunityModalSteps.STEP_3] = obj5;
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { screens: first, initialRouteName: tmp(18102).EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
    const intl = tmp(1119).intl;
    obj6.headerBackTitle = intl.string(tmp(1119).t["13/7kX"]);
    const tmp8 = jsx(tmp(7246).Navigator, { screens: first, initialRouteName: tmp(18102).EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(7238), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1119).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1119).t.cpT0Cq);
      return closure_1_4(closure_1_0(7621).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18103), {});
        }
      },
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18115), {});
        }
      },
      [closure_1_0(closure_1_2[10]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(18116), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
});
