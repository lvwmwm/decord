// Module ID: 12716
// Function ID: 12717
// Name: GameOrganizationJoinModal
// Dependencies: [19, 12717, 21, 558, 576, 6924, 12718, 12723, 12725, 7095, 1128, 12726, 2]

// Module 12716 (GameOrganizationJoinModal)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import NavigatorHeader from "NavigatorHeader" /* 6924 */;
import StepModal2 from "StepModal" /* 12726 */;
import react from "react" /* 19 */;
import GameOrganizationJoinModalConstants from "GameOrganizationJoinModalConstants" /* 12717 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
const closeGameOrganizationJoinModal = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = Fragment.jsx;
let items = [, , ];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScreens(arg0) {
  let closure_0;
  let tmp4;
  let tmp5;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    const fn = function c() {
      let code;
      let obj3;
      let obj5;
      let obj6;
      let obj8;
      const obj = {};
      const VIEW = GameOrganizationJoinScenes.VIEW;
      const obj2 = {
        headerTitle() {
          return null;
        },
        headerLeft: obj3.getHeaderCloseButton(closeGameOrganizationJoinModal),
        render() {
          return jsx(code(dependencyMap[6]).ViewStep, { code });
        }
      };
      obj[VIEW] = obj2;
      obj3 = NavigatorHeader;
      const ACCEPT = GameOrganizationJoinScenes.ACCEPT;
      const obj4 = {
        headerTitle() {
          return null;
        },
        headerLeft: obj5.getHeaderBackButton(),
        headerRight: obj6.getHeaderCloseButton(closeGameOrganizationJoinModal),
        render() {
          return jsx(code(dependencyMap[7]).AcceptStep, { code });
        }
      };
      obj5 = NavigatorHeader;
      obj[ACCEPT] = obj4;
      obj6 = NavigatorHeader;
      const OUTCOME = GameOrganizationJoinScenes.OUTCOME;
      const obj7 = {
        headerTitle() {
          return null;
        },
        headerLeft: obj8.getHeaderCloseButton(closeGameOrganizationJoinModal),
        gestureEnabled: false,
        render(arg0) {
          const OutcomeStep = code(dependencyMap[8]).OutcomeStep;
          const merged = Object.assign(arg0);
          return <OutcomeStep code={code} />;
        }
      };
      obj[OUTCOME] = obj7;
      obj8 = NavigatorHeader;
      return obj;
    };
    items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const tmpResult = tmp(7095);
  return tmpResult.useNavigatorScreens(tmp4, tmp5);
}) : (function useScreens(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("Navigator");
  items = [arg0];
  return obj.useNavigatorScreens(() => {
    let code;
    let obj3;
    let obj5;
    let obj6;
    let obj8;
    const obj = {};
    const VIEW = GameOrganizationJoinScenes.VIEW;
    const obj2 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render() {
        return jsx(code(dependencyMap[6]).ViewStep, { code });
      }
    };
    obj[VIEW] = obj2;
    obj3 = NavigatorHeader;
    const ACCEPT = GameOrganizationJoinScenes.ACCEPT;
    const obj4 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj5.getHeaderBackButton(),
      headerRight: obj6.getHeaderCloseButton(closeGameOrganizationJoinModal),
      render() {
        return jsx(code(dependencyMap[7]).AcceptStep, { code });
      }
    };
    obj5 = NavigatorHeader;
    obj[ACCEPT] = obj4;
    obj6 = NavigatorHeader;
    const OUTCOME = GameOrganizationJoinScenes.OUTCOME;
    const obj7 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj8.getHeaderCloseButton(closeGameOrganizationJoinModal),
      gestureEnabled: false,
      render(arg0) {
        const OutcomeStep = code(dependencyMap[8]).OutcomeStep;
        const merged = Object.assign(arg0);
        return <OutcomeStep code={code} />;
      }
    };
    obj[OUTCOME] = obj7;
    obj8 = NavigatorHeader;
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinModal(code) {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_6(code.code);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl2.t["13/7kX"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const tmp11 = jsx(StepModal2.StepModal, { screens: tmp4, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: first });
    cResult[1] = tmp4;
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function GameOrganizationJoinModal(code) {
  const StepModal = StepModal2.StepModal;
  const intl = intl2.intl;
  return <StepModal screens={closure_6(arg0.code)} initialRouteName={GameOrganizationJoinScenes.VIEW} steps={items} headerBackTitle={intl.string(intl2.t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default tmp4;
