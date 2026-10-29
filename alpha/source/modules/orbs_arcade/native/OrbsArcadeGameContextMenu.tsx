// Module ID: 16939
// Function ID: 16940
// Name: OrbsArcadeGameContextMenu
// Dependencies: [109, 5, 19, 1389, 21, 16906, 5701, 1125, 558, 576, 504, 14431, 16917, 12356, 8014, 9175, 9827, 2]

// Module 16939 (OrbsArcadeGameContextMenu)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1125 */;
import AssetRegistryDefault from "AssetRegistry" /* 9175 */;
import RefreshIcon from "RefreshIcon" /* 12356 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14431 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 16906 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16917 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2, c4, currentUser;

function handleResetGame() {
  return obj(...arguments);
}
let obj = function _handleResetGame() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let intl;
    let obj3;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            c3 = 1;
            c2 = 2;
            c4 = 1;
            const obj5 = { value: obj3.resetOrbsArcadeGame(closure_0), done: false };
            obj3 = OrbsArcadeActionCreators;
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
            const obj6 = { text: intl.string(closure_129_0(closure_129_2[7]).t.CKsXk3), variant: "critical" };
            const open = closure_129_1(closure_129_2[6]).open;
            const tmp8 = closure_129_1(closure_129_2[6]);
            intl = closure_129_0(closure_129_2[7]).intl;
            open("ORBS_ARCADE_RESET_GAME_ERROR", obj6);
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c4 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp17) {
        if (0 === c3) {
          c4 = 3;
          throw tmp17;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["ref"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameContextMenu(game) {
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  function action() {
    obj = openOrbsArcadeSheets;
    return obj.openOrbsArcadeInfoSheet(game.id);
  }
  const action2 = function action() {
    return handleResetGame(game.id);
  };
  let tmp = game;
  obj = game(576);
  const cResult = obj.c(15);
  game = game.game;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      currentUser = currentUser.getCurrentUser();
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1125).intl;
    const stringResult = intl.string(tmp(1125).t["3AT3DL"]);
    cResult[2] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== game.id) {
    const items1 = [{ label: tmp8, IconComponent: tmp(14431).CircleQuestionIcon, action }];
    cResult[3] = game.id;
    cResult[4] = items1;
    tmp10 = items1;
    const obj2 = { label: tmp8, IconComponent: tmp(14431).CircleQuestionIcon, action };
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let intl2 = tmp(1125).intl;
    const stringResult1 = intl2.string(tmp(1125).t.oeBTVF);
    cResult[5] = stringResult1;
    tmp11 = stringResult1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== game.id) {
    const items2 = [{ label: tmp11, IconComponent: tmp(12356).RefreshIcon, variant: "destructive", action: action2 }];
    cResult[6] = game.id;
    cResult[7] = items2;
    tmp13 = items2;
    const obj3 = { label: tmp11, IconComponent: tmp(12356).RefreshIcon, variant: "destructive", action: action2 };
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === stateFromStores) {
    if (cResult[9] === tmp10) {
      let tmp14;
      let tmp17;
      let tmp18;
      if (cResult[10] === tmp13) {
        tmp14 = cResult[11];
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = game(dependencyMap[14]).IconButton;
            const merged = Object.assign(tmp);
            const intl = game(dependencyMap[7]).intl;
            const intl2 = game(dependencyMap[7]).intl;
            return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
          }
        }
        cResult[12] = S;
        tmp17 = S;
      } else {
        class S {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = game(dependencyMap[14]).IconButton;
            const merged = Object.assign(tmp);
            const intl = game(dependencyMap[7]).intl;
            const intl2 = game(dependencyMap[7]).intl;
            return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
          }
        }
      }
      if (cResult[13] !== tmp14) {
        class S {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = game(dependencyMap[14]).IconButton;
            const merged = Object.assign(tmp);
            const intl = game(dependencyMap[7]).intl;
            const intl2 = game(dependencyMap[7]).intl;
            return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
          }
        }
        const tmp19 = jsx(tmp(9827).ContextMenu, { items: tmp14, triggerOnTap: true, children: tmp17 });
        cResult[13] = tmp14;
        cResult[14] = tmp19;
        tmp18 = tmp19;
      } else {
        class S {
          constructor(ref) {
            ref = ref.ref;
            const tmp = _objectWithoutProperties(ref, closure_1_3);
            const IconButton = game(dependencyMap[14]).IconButton;
            const merged = Object.assign(tmp);
            const intl = game(dependencyMap[7]).intl;
            const intl2 = game(dependencyMap[7]).intl;
            return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
          }
        }
      }
      return tmp18;
    }
  }
  if (stateFromStores) {
    class S {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_3);
        const IconButton = game(dependencyMap[14]).IconButton;
        const merged = Object.assign(tmp);
        const intl = game(dependencyMap[7]).intl;
        const intl2 = game(dependencyMap[7]).intl;
        return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
      }
    }
    tmp16[0] = tmp10;
    tmp16[1] = tmp13;
  } else {
    class S {
      constructor(ref) {
        ref = ref.ref;
        const tmp = _objectWithoutProperties(ref, closure_1_3);
        const IconButton = game(dependencyMap[14]).IconButton;
        const merged = Object.assign(tmp);
        const intl = game(dependencyMap[7]).intl;
        const intl2 = game(dependencyMap[7]).intl;
        return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
      }
    }
    tmp15[0] = tmp10;
  }
  cResult[8] = stateFromStores;
  cResult[9] = tmp10;
  cResult[10] = tmp13;
  cResult[11] = tmp15;
  tmp14 = tmp15;
}) : (function OrbsArcadeGameContextMenu(game) {
  let items4;
  game = game.game;
  obj = game(504);
  let items = [UserStore];
  const items1 = [game.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const memo = react.useMemo(() => {
    let id;
    let intl;
    obj = {
      label: intl.string(intl3.t["3AT3DL"]),
      IconComponent: CircleQuestionIcon.CircleQuestionIcon,
      action() {
        obj = game(dependencyMap[12]);
        return obj.openOrbsArcadeInfoSheet(id.id);
      }
    };
    intl = intl3.intl;
    const items = [obj];
    return items;
  }, items1);
  const items2 = [game.id];
  const memo1 = react.useMemo(() => {
    let id;
    let intl;
    obj = {
      label: intl.string(intl3.t.oeBTVF),
      IconComponent: RefreshIcon.RefreshIcon,
      variant: "destructive",
      action() {
        return handleResetGame(id.id);
      }
    };
    intl = intl3.intl;
    const items = [obj];
    return items;
  }, items2);
  const ContextMenu = game(9827).ContextMenu;
  const tmp4 = jsx;
  if (stateFromStores) {
    const items3 = [memo, memo1];
    items4 = items3;
  } else {
    items4 = [memo];
  }
  const obj2 = {
    items: items4,
    triggerOnTap: true,
    children(ref) {
      ref = ref.ref;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const IconButton = game(dependencyMap[14]).IconButton;
      const merged1 = Object.assign(merged);
      const intl = game(dependencyMap[7]).intl;
      const intl2 = game(dependencyMap[7]).intl;
      return <IconButton ref={ref} variant="secondary-overlay" icon={AssetRegistryDefault} accessibilityLabel={intl.string(game(dependencyMap[7]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[7]).t.hd0b7t)} />;
    }
  };
  return tmp4(ContextMenu, obj2);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameContextMenu.tsx");

export default tmp2;
