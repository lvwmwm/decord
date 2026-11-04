// Module ID: 16428
// Function ID: 16429
// Name: OrbsArcadeQuestHomeSection
// Dependencies: [19, 16429, 16431, 21, 5003, 587, 558, 576, 16432, 504, 9648, 6009, 5266, 1128, 16436, 9506, 2]

// Module 16428 (OrbsArcadeQuestHomeSection)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1128 */;
import Stack_Stack from "Stack/Stack" /* 6009 */;
import GameControllerIcon from "GameControllerIcon" /* 9648 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 16431 */;
import useFetchOrbsArcadeGamesDefault from "useFetchOrbsArcadeGames" /* 16432 */;
import OrbsArcadeGameTileDefault from "OrbsArcadeGameTile" /* 16436 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16429 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const ORBS_ARCADE_GAME_TILE_MIN_HEIGHT = OrbsArcadeNativeConstants.ORBS_ARCADE_GAME_TILE_MIN_HEIGHT;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, sectionHeader: { gap: 2, paddingHorizontal: 4, paddingBottom: 2 }, skeletonTile: size };
obj2 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = { width: "100%", height: ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeQuestHomeSection(location) {
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(17);
  const _location = location.location;
  const tmp4 = closure_6();
  useFetchOrbsArcadeGamesDefault(_location);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    const fn = function h() {
      return OrbsArcadeStore.orbsArcadeGames;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp7 = items;
    tmp8 = fn;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [OrbsArcadeStore];
    const fn2 = function p() {
      return null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp11 = fn2;
    tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult2 = get_initialized;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
  if (!stateFromStores1) {
    let tmp15;
    let tmp18;
    let tmp22;
    let tmp25;
    let mapped;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = React3(GameControllerIcon.GameControllerIcon, {});
      cResult[4] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items2 };
      const Stack = tmp(6009).Stack;
      items2 = [tmp15, ];
      const obj3 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl3.t["2L068F"]) };
      const Heading = tmp(5266).Heading;
      intl = tmp(1128).intl;
      items2[1] = React3(Heading, obj3);
      const tmp21 = hasOwnProperty(Stack, obj2);
      cResult[5] = tmp21;
      tmp18 = tmp21;
    } else {
      tmp18 = cResult[5];
    }
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { variant: "heading-sm/medium", color: "text-subtle", children: intl2.string(intl3.t.kMY21I) };
      const Text = tmp(5266).Text;
      intl2 = tmp(1128).intl;
      const tmp24 = React3(Text, obj4);
      cResult[6] = tmp24;
      tmp22 = tmp24;
    } else {
      tmp22 = cResult[6];
    }
    if (cResult[7] !== tmp4.sectionHeader) {
      const obj5 = { style: tmp4.sectionHeader, children: items3 };
      items3 = [tmp18, tmp22];
      const tmp27 = hasOwnProperty(Stack_Stack.Stack, obj5);
      cResult[7] = tmp4.sectionHeader;
      cResult[8] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[8];
    }
    if (cResult[9] === stateFromStores1) {
      if (cResult[10] === stateFromStores) {
        let tmp28;
        if (cResult[11] === tmp4.skeletonTile) {
          tmp28 = cResult[12];
        }
        if (cResult[13] === tmp4.section) {
          if (cResult[14] === tmp25) {
            let tmp31;
            if (cResult[15] === tmp28) {
              tmp31 = cResult[16];
            }
            tmp14 = tmp31;
          }
        }
        const obj6 = { spacing: nativeDefault.space.PX_16, style: tmp4.section, children: items4 };
        const Stack2 = tmp(6009).Stack;
        items4 = [tmp25, tmp28];
        const tmp33 = hasOwnProperty(Stack2, obj6);
        cResult[13] = tmp4.section;
        cResult[14] = tmp25;
        cResult[15] = tmp28;
        cResult[16] = tmp33;
        tmp31 = tmp33;
      }
    }
    if (stateFromStores1) {
      mapped = stateFromStores.map((game) => {
        const obj = { game };
        return closure_1_4(OrbsArcadeGameTileDefault, obj, game.id);
      });
    } else {
      const obj7 = { style: tmp4.skeletonTile };
      mapped = React3(tmp5(9506), obj7);
    }
    cResult[9] = stateFromStores1;
    cResult[10] = stateFromStores;
    cResult[11] = tmp4.skeletonTile;
    cResult[12] = mapped;
    tmp28 = mapped;
  } else {
    tmp14 = null;
  }
  return tmp14;
}) : (function OrbsArcadeQuestHomeSection(location) {
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let tmp8Result;
  const _location = location.location;
  const tmp = closure_6();
  useFetchOrbsArcadeGamesDefault(_location);
  let obj = get_initialized;
  const items = [OrbsArcadeStore];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.orbsArcadeGames);
  const items1 = [OrbsArcadeStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed);
  if (!stateFromStores1) {
    let mapped;
    const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp.section, children: items4 };
    const Stack = tmp5(6009).Stack;
    const obj4 = { style: tmp.sectionHeader, children: items3 };
    const Stack2 = tmp5(6009).Stack;
    const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items2 };
    const Stack3 = tmp5(6009).Stack;
    items2 = [React3(GameControllerIcon.GameControllerIcon, {}), ];
    const obj6 = { variant: "text-lg/semibold", color: "text-strong", children: intl.string(intl3.t["2L068F"]) };
    const Heading = tmp5(5266).Heading;
    intl = tmp5(1128).intl;
    items2[1] = React3(Heading, obj6);
    items3 = [hasOwnProperty(Stack3, obj5), ];
    const obj7 = { variant: "heading-sm/medium", color: "text-subtle", children: intl2.string(intl3.t.kMY21I) };
    const Text = tmp5(5266).Text;
    intl2 = tmp5(1128).intl;
    items3[1] = React3(Text, obj7);
    items4 = [hasOwnProperty(Stack2, obj4), ];
    const tmp8 = hasOwnProperty;
    const tmp9 = React3;
    if (stateFromStores1) {
      mapped = stateFromStores.map((game) => {
        const obj = { game };
        return closure_1_4(OrbsArcadeGameTileDefault, obj, game.id);
      });
    } else {
      const obj8 = { style: tmp.skeletonTile };
      mapped = tmp9(tmp2(9506), obj8);
    }
    items4[1] = mapped;
    tmp8Result = tmp8(Stack, obj3);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx");

export default tmp5;
