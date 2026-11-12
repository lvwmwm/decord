// Module ID: 17571
// Function ID: 17572
// Name: OrbsArcadeGameContextMenu
// Dependencies: [5, 19, 1385, 21, 17535, 5952, 1113, 504, 9992, 17539, 17540, 13200, 9081, 7922, 7357, 2]
// Exports: default

// Module 17571 (OrbsArcadeGameContextMenu)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9992 */;
import RefreshIcon from "RefreshIcon" /* 13200 */;
import OrbsArcadeActionCreators from "OrbsArcadeActionCreators" /* 17535 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let c2, c4, currentUser;

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
        return { value: "HermesInternal", done: null };
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
            const obj6 = { text: intl.string(closure_129_0(closure_129_2[6]).t.CKsXk3), variant: "critical" };
            const open = closure_129_1(closure_129_2[5]).open;
            const tmp8 = closure_129_1(closure_129_2[5]);
            intl = closure_129_0(closure_129_2[6]).intl;
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
          return { value: "HermesInternal", done: null };
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
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameContextMenu.tsx");

export default function OrbsArcadeGameContextMenu(game) {
  let items4;
  game = game.game;
  const surface = game.surface;
  obj = game(504);
  let items = [UserStore];
  const items1 = [game, surface];
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
        const trackOrbsArcadeCtaClicked = game(dependencyMap[9]).trackOrbsArcadeCtaClicked;
        game(dependencyMap[9]);
        const result = trackOrbsArcadeCtaClicked(id, game(dependencyMap[9]).OrbsArcadeCta.WHAT_IS_ORBS_ARCADE, game(dependencyMap[9]).OrbsArcadeCtaLocation.GAME_TILE, surface);
        obj = game(dependencyMap[10]);
        const result1 = obj.openOrbsArcadeInfoSheet(id.id, surface);
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
        function handleResetGame() {
          return closure_1_7(...arguments);
        }
        return handleResetGame(id.id);
      }
    };
    intl = intl3.intl;
    const items = [obj];
    return items;
  }, items2);
  const ContextMenu = game(9081).ContextMenu;
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
      const IconButton = game(dependencyMap[13]).IconButton;
      const merged1 = Object.assign(merged);
      const intl = game(dependencyMap[6]).intl;
      const intl2 = game(dependencyMap[6]).intl;
      return <IconButton ref={ref} variant="secondary-overlay" size="sm" icon={surface(dependencyMap[14])} accessibilityLabel={intl.string(game(dependencyMap[6]).t.reWgFH)} accessibilityHint={intl2.string(game(dependencyMap[6]).t.hd0b7t)} />;
    }
  };
  return tmp4(ContextMenu, obj2);
};
