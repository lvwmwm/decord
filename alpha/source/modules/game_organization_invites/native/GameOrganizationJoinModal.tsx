// Module ID: 12649
// Function ID: 12650
// Name: GameOrganizationJoinModal
// Dependencies: [19, 10993, 10994, 21, 4969, 587, 6658, 558, 576, 504, 12650, 5964, 5220, 5230, 1128, 2406, 6910, 7081, 12651, 2]

// Module 12649 (GameOrganizationJoinModal)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import _modDef2406 from "module_2406" /* 2406 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import NavigatorHeader from "NavigatorHeader" /* 6910 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10994 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12650 */;
import StepModal2 from "StepModal" /* 12651 */;
import react from "react" /* 19 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10993 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj3;
function closeModal() {
  const arr = ModalActionCreatorsDefault;
  arr.pop();
}
let closure_5 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { CONFIRM: "CONFIRM" };
let items = [obj.CONFIRM];
let obj2 = { container: obj3, text: { textAlign: "center" } };
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConfirmStep(code) {
  let first;
  let tmp7;
  obj = code(576);
  const cResult = obj.c(26);
  code = code.code;
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [GameOrganizationInviteStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== code) {
    const fn = function u() {
      const invite = GameOrganizationInviteStore.getInvite(code);
      let state;
      if (invite != null) {
        state = invite.state;
      }
      let tmp3 = null;
      if (state === constants.RESOLVED) {
        tmp3 = invite;
      }
      return tmp3;
    };
    cResult[1] = code;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = code(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
    cResult[3] = M;
  } else {
    class M {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  }
  if (null == stateFromStores) {
    class M {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
  } else {
    class M {
      constructor() {
        const arr = ModalActionCreatorsDefault;
        arr.pop();
      }
    }
    const obj2 = { displayNoun: stateFromStores.displayNoun };
    const tmp17 = getGameOrganizationDisplayNounDefault(obj2);
    const Stack = tmp(5964).Stack;
    const PX_24 = nativeDefault.space.PX_24;
    const container = tmp4.container;
    const tmp16 = importDefault;
    if (cResult[14] === stateFromStores.organization.name) {
      class M {
        constructor() {
          const arr = ModalActionCreatorsDefault;
          arr.pop();
        }
      }
      const Button = tmp(5230).Button;
      const intl = tmp(1128).intl;
      const obj3 = { noun: tmp17 };
      cResult[4] = stateFromStores.displayNoun;
      cResult[5] = stateFromStores.organization.name;
      cResult[6] = tmp4.container;
      cResult[7] = tmp4.text;
      cResult[8] = Button;
      cResult[9] = Stack;
      cResult[10] = intl.formatToPlainString(tmp16(2406)["Cz/ZUM"], obj3);
      cResult[11] = PX_24;
      cResult[12] = container;
      cResult[13] = tmp18;
      const formatToPlainStringResult = intl.formatToPlainString(tmp16(2406)["Cz/ZUM"], obj3);
    }
    const obj4 = { variant: "heading-xl/bold", style: tmp4.text, children: stateFromStores.organization.name };
    cResult[14] = stateFromStores.organization.name;
    cResult[15] = tmp4.text;
    cResult[16] = closure_6(code(5220).Text, obj4);
    const tmp20 = closure_6(code(5220).Text, obj4);
  }
}) : (function ConfirmStep(code) {
  let intl;
  let items1;
  let obj6;
  code = code.code;
  const tmp = closure_10();
  let tmp3 = dependencyMap;
  items = [GameOrganizationInviteStore];
  obj = code(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    const invite = GameOrganizationInviteStore.getInvite(code);
    let state;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  });
  if (null == stateFromStores) {
    return null;
  } else {
    const obj2 = { displayNoun: stateFromStores.displayNoun };
    const obj3 = { spacing: nativeDefault.space.PX_24, style: tmp.container, children: items1 };
    const tmp7 = getGameOrganizationDisplayNounDefault(obj2);
    const Stack = tmp2(5964).Stack;
    const obj4 = { variant: "heading-xl/bold", style: tmp.text, children: stateFromStores.organization.name };
    items1 = [closure_6(code(5220).Text, obj4), ];
    const obj5 = { text: intl.formatToPlainString(_modDef2406["Cz/ZUM"], obj6), size: "lg", onPress: tmp5 };
    const Button = tmp2(5230).Button;
    intl = tmp2(1128).intl;
    obj6 = { noun: tmp7 };
    items1[1] = closure_6(Button, obj5);
    return closure_7(Stack, obj3);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScreens(arg0) {
  let closure_0;
  let tmp4;
  let tmp5;
  _require = arg0;
  obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    const fn = function t() {
      let code;
      let obj3;
      obj = {};
      const CONFIRM = obj.CONFIRM;
      const obj2 = {
        headerTitle() {
          return null;
        },
        headerLeft: obj3.getHeaderCloseButton(closeModal),
        render() {
          obj = { code };
          return closure_2_6(closure_2_12, obj);
        }
      };
      obj[CONFIRM] = obj2;
      obj3 = NavigatorHeader;
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
  const tmpResult = tmp(7081);
  return tmpResult.useNavigatorScreens(tmp4, tmp5);
}) : (function useScreens(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("Navigator");
  items = [arg0];
  return obj.useNavigatorScreens(() => {
    let code;
    let obj3;
    obj = {};
    const CONFIRM = obj.CONFIRM;
    const obj2 = {
      headerTitle() {
        return null;
      },
      headerLeft: obj3.getHeaderCloseButton(closeModal),
      render() {
        obj = { code };
        return closure_2_6(closure_2_12, obj);
      }
    };
    obj[CONFIRM] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinModal(code) {
  let first;
  let tmp7;
  obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_13(code.code);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl2.t["13/7kX"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const obj2 = { screens: tmp4, initialRouteName: obj.CONFIRM, steps: items, headerBackTitle: first };
    const tmp11 = metroRequire(StepModal2.StepModal, obj2);
    cResult[1] = tmp4;
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function GameOrganizationJoinModal(code) {
  let intl;
  obj = { screens: closure_13(code.code), initialRouteName: obj.CONFIRM, steps: items, headerBackTitle: intl.string(intl2.t["13/7kX"]) };
  const StepModal = StepModal2.StepModal;
  intl = intl2.intl;
  return metroRequire(StepModal, obj);
});
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal.tsx");

export default tmp3;
