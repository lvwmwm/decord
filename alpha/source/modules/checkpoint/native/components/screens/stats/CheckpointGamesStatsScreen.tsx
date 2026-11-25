// Module ID: 12849
// Function ID: 12850
// Name: CheckpointGamesStatsScreen
// Dependencies: [17, 12571, 6365, 21, 5012, 575, 12811, 6737, 1112, 3494, 7722, 12590, 12832, 12831, 12833, 12850, 12840, 12592, 12807, 12808, 12838, 504, 12589, 2]
// Exports: default

// Module 12849 (CheckpointGamesStatsScreen)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import _modDef3494 from "module_3494" /* 3494 */;
import CheckpointScreen from "CheckpointScreen" /* 12589 */;
import CheckpointTextDefault from "CheckpointText" /* 12590 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 12592 */;
import _modDef12807 from "module_12807" /* 12807 */;
import _modDef12808 from "module_12808" /* 12808 */;
import useIsCheckpointWide from "useIsCheckpointWide" /* 12811 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 12831 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 12832 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 12838 */;
import CheckpointGameCard2 from "CheckpointGameCard" /* 12850 */;
import react_native from "react-native" /* 17 */;
import CheckpointStore from "CheckpointStore" /* 12571 */;
import CheckpointConstants from "CheckpointConstants" /* 6365 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useIsCheckpointWideDefault = useIsCheckpointWide;
let _require, dependencyMap, game, importDefault, list;

let CHECKPOINT_NAV_HEIGHT;
let c3;
let c9;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let tmp7;
const CheckpointRankTagDefault = tmp7(12840);
function UserGames(gameStats) {
  let closure_1;
  let formatResult;
  let items;
  let obj10;
  let tmp12;
  let tmp13;
  let tmp5Result;
  gameStats = gameStats.gameStats;
  const tmp = closure_10();
  _require = tmp;
  let tmp3 = dependencyMap;
  importDefault = useIsCheckpointWideDefault();
  let num;
  const _Math = Math;
  if (gameStats != null) {
    num = gameStats.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  const tmp5 = _require;
  let prop;
  const getCheckpointTopPercent = require("CheckpointStatsUtils").getCheckpointTopPercent;
  const tmp6 = require("CheckpointStatsUtils");
  if (gameStats != null) {
    prop = gameStats.totalGamesPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  let games;
  if (gameStats != null) {
    games = gameStats.games;
  }
  if (games == null) {
    games = [];
  }
  let intl = tmp5(1112).intl;
  let formatToPlainStringResult;
  const stringResult = intl.string(_modDef3494.HM2fjf);
  if (null != checkpointTopPercent) {
    const intl2 = tmp5(1112).intl;
    let obj = { percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(3494).VjXwW9, obj);
  }
  let obj2 = {
    containerStyle: tmp.container,
    header: tmp12(tmp13, obj10),
    children: games.map((game, index) => {
      let intl;
      let items;
      let items1;
      let items2;
      let obj2;
      let obj4;
      let tmp5Result;
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { accessible: true, accessibilityLabel: intl.formatToPlainString(_modDef3494.mqdLhl, obj2), style: items, children: items2 };
      intl = intl5.intl;
      items = [game.game, ];
      let wideCover = closure_1;
      obj2 = { gameName: game.name, rank: sum, numSessions: rounded };
      items[1] = closure_1 && game.wideGame;
      const obj3 = { game, style: items1, children: metroImportAll(CheckpointRankTagDefault, obj4) };
      items1 = [game.cover, ];
      const CheckpointGameCard = tmp5(12850).CheckpointGameCard;
      const tmp3 = React4;
      const tmp4 = React3;
      if (wideCover) {
        wideCover = tmp8.wideCover;
      }
      items1[1] = wideCover;
      obj4 = { rank: sum, style: game.rank };
      items2 = [metroImportAll(CheckpointGameCard, obj3), ];
      const obj5 = { name: game.name, label: tmp5Result.formatCheckpointStatNumber(rounded), textAlignment: "left" };
      const CheckpointGameCardDescription = tmp5(12850).CheckpointGameCardDescription;
      tmp5Result = CheckpointNumberUtils;
      items2[1] = metroImportAll(CheckpointGameCardDescription, obj5);
      return tmp3(tmp4, obj, game.id);
    })
  };
  let obj3 = { style: tmp.title, children: items };
  let obj4 = { size: "refresh_sm", color };
  items = [closure_8(tmp5(7722).GameControllerIcon, obj4), ];
  let obj5 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp2Result = CheckpointTextDefault;
  items[1] = closure_8(tmp2Result, obj5);
  let items1 = [closure_9(closure_4, obj3), , ];
  const obj6 = { accessible: true, accessibilityLabel: tmp5Result.formatCheckpointStatAccessibilityLabel("games", roundResult), style: tmp.number, children: closure_8(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  tmp5Result = tmp5(12832);
  items1[1] = closure_8(closure_4, obj6);
  const obj7 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp11 = GamesLayout;
  tmp12 = closure_9;
  tmp13 = closure_4;
  const tmp2Result2 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp5(1112).intl;
    const obj8 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_8(closure_1(dependencyMap[14]), obj, arg1);
        }
    };
    formatResult = intl4.format(tmp2(3494)["hc0/yJ"], obj8);
  } else {
    const intl3 = tmp5(1112).intl;
    const obj9 = { numGames: roundResult };
    formatResult = intl3.format(tmp2(3494).aJMJ6b, obj9);
  }
  obj10 = { children: items1 };
  items1[2] = closure_8(tmp2Result2, obj7);
  return closure_8(tmp11, obj2);
}
function GlobalGames(gameStats) {
  let closure_2;
  let globalGame;
  let intl2;
  let items;
  let items1;
  let items2;
  let obj2;
  let stringResult;
  gameStats = gameStats.gameStats;
  const tmp = closure_10();
  importDefault = tmp;
  dependencyMap = useIsCheckpointWideDefault();
  let obj = {
    containerStyle: items,
    global: true,
    header: closure_9(closure_4, obj2),
    children: closure_6.map((list) => {
      let items;
      let items1;
      let items2;
      let str;
      list = list.list;
      const first = gameStats[list][0];
      if (null == first) {
        return null;
      } else {
        const intl = intl5.intl;
        const stringResult = intl.string(tmp);
        const obj2 = { name: first.name, label: stringResult.toLocaleUpperCase(), textAlignment: str };
        const CheckpointGameCardDescription = CheckpointGameCard2.CheckpointGameCardDescription;
        str = "center";
        const tmp9 = require;
        if (closure_2) {
          str = "left";
        }
        const tmp11Result = metroImportAll(CheckpointGameCardDescription, obj2);
        const _HermesInternal = HermesInternal;
        const obj = { accessible: true, accessibilityLabel: "" + first.name + ", " + stringResult, style: items, children: items2 };
        items = [globalGame.globalGame, closure_2 && globalGame.wideGlobalGame];
        const obj3 = { game: first, style: items1 };
        items1 = [globalGame.globalCover, ];
        let wideGlobalCover = tmp12;
        const CheckpointGameCard = tmp9(12850).CheckpointGameCard;
        const tmp4 = React4;
        if (closure_2) {
          wideGlobalCover = tmp7.wideGlobalCover;
        }
        items1[1] = wideGlobalCover;
        items2 = [metroImportAll(CheckpointGameCard, obj3), ];
        let tmp11Result2 = tmp11Result;
        if (closure_2) {
          const obj4 = { style: globalGame.wideGlobalDescription, children: tmp11Result };
          tmp11Result2 = tmp11(tmp5, obj4);
        }
        items2[1] = tmp11Result2;
        return tmp4(React3, obj, list);
      }
    })
  };
  items = [, ];
  ({ container: arr[0], globalContainer: arr[1] } = tmp);
  obj2 = { style: tmp.header, children: items2 };
  let obj3 = { style: tmp.globalHeading, children: items1 };
  let obj4 = { animatedUri: _modDef12807, staticUri: _modDef12808, style: tmp.globe };
  const tmp2 = CheckpointApngPlayerDefault;
  items1 = [closure_8(tmp2, obj4), ];
  const obj5 = { isStepHeading: true, children: stringResult.toLocaleUpperCase() };
  const tmp3 = CheckpointDisplayTextDefault;
  let intl = gameStats(1112).intl;
  stringResult = intl.string(_modDef3494.qbCgI7);
  items1[1] = closure_8(tmp3, obj5);
  items2 = [closure_9(closure_4, obj3), ];
  const obj6 = { variant: "heading-lg/medium", children: intl2.string(_modDef3494["0oDeiM"]) };
  let tmp4 = CheckpointTextDefault;
  intl2 = gameStats(1112).intl;
  items2[1] = closure_8(tmp4, obj6);
  return closure_8(GamesLayout, obj);
}
function GamesLayout(containerStyle) {
  let _global;
  let children;
  let header;
  let obj6;
  let tmp9;
  ({ header, children, global: _global } = containerStyle);
  containerStyle = containerStyle.containerStyle;
  if (_global === undefined) {
    _global = false;
  }
  const tmp = closure_10();
  const tmp2 = useIsCheckpointWideDefault();
  CheckpointScreen;
  const tmp5 = _global ? tmp.globalGames : tmp.games;
  const obj = { style: null, children: null };
  const tmp6 = React4;
  if (tmp2) {
    const items = [tmp.wideContainer, ];
    const obj2 = { height: tmp4 };
    items[1] = obj2;
    obj.style = items;
    const obj3 = { style: tmp.wideHeader, children: header };
    const items1 = [metroImportAll(React3, obj3), ];
    ({ wideGamesScroll: obj5.style, wideGamesContent: obj5.contentContainerStyle } = tmp);
    const items2 = [tmp5, tmp.wideGames, ];
    const obj4 = { style: null, contentContainerStyle: null, showsVerticalScrollIndicator: false, nestedScrollEnabled: true, children: metroImportAll(React3, obj6) };
    const tmp11 = _false;
    if (_global) {
      _global = tmp.wideGlobalGames;
    }
    obj6 = { style: items2, children };
    items2[2] = _global;
    items1[1] = metroImportAll(tmp11, obj4);
    obj.children = items1;
    tmp9 = obj;
  } else {
    obj.style = containerStyle;
    const items3 = [header, ];
    const obj11 = { style: tmp5, children };
    items3[1] = metroImportAll(React3, obj11);
    obj.children = items3;
    tmp9 = obj;
  }
  return tmp6(React3, tmp9);
}
({ ScrollView: c3, View: closure_4 } = react_native);
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: metroRequire, CHECKPOINT_PRIMARY: metroImportDefault, CHECKPOINT_NAV_HEIGHT } = CheckpointConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, globalHeading: obj5, globe: { width: 75, height: 56 }, title: obj6, titleText: { flexShrink: 1 }, number: obj7, games: obj8, game: obj9, cover: { width: "87.5%" }, rank: { position: "absolute", bottom: 0, left: 0 }, globalGames: obj10, globalGame: obj11, globalCover: { width: 96 }, wideContainer: { width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap: 76 }, wideHeader: { width: 268, flexShrink: 1 }, wideGamesScroll: { flex: 1, minWidth: 74, maxWidth: 334, alignSelf: "stretch", marginVertical: CHECKPOINT_NAV_HEIGHT }, wideGamesContent: { flexGrow: 1, justifyContent: "center" }, wideGames: { columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_16 }, wideGame: { width: 74 }, wideGlobalGames: { columnGap: 0 }, wideGlobalGame: { width: "50%", flexDirection: "row", paddingRight: nativeDefault.space.PX_12 }, wideGlobalCover: { width: nativeDefault.space.PX_48 }, wideGlobalDescription: { flex: 1 }, wideCover: { width: "100%" } };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj9 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj10 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_24 };
obj11 = { width: "50%", alignItems: "center", gap: nativeDefault.space.PX_12 };
({ width: "100%", maxWidth: useIsCheckpointWide.CHECKPOINT_WIDE_MAX_WIDTH, alignSelf: "center", flexDirection: "row", justifyContent: "center", alignItems: "center", columnGap: 76 });
({ columnGap: nativeDefault.space.PX_24, rowGap: nativeDefault.space.PX_16 });
({ width: "50%", flexDirection: "row", paddingRight: nativeDefault.space.PX_12 });
({ width: nativeDefault.space.PX_48 });
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default function CheckpointGamesStatsScreen() {
  const tmp = useIsCheckpointWideDefault();
  let obj = get_initialized;
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  const items1 = [CheckpointStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const obj = require("CheckpointStatsUtils");
    return obj.hasCheckpointGames(CheckpointStore.stats);
  });
  const items2 = [CheckpointStore];
  const obj3 = get_initialized;
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  const obj4 = { centered: tmp, children: null };
  if (!stateFromStores1) {
    let tmp5Result;
    if (null != stateFromStores2) {
      const obj5 = { gameStats: stateFromStores2 };
      tmp5Result = tmp5(GlobalGames, obj5);
    }
    obj4.children = tmp5Result;
    return metroImportAll(tmp6, obj4);
  }
  tmp5Result = tmp5(UserGames, { gameStats: stateFromStores });
};
