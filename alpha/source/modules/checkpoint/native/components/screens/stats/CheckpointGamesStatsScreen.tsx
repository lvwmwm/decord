// Module ID: 14401
// Function ID: 14402
// Name: CheckpointGamesStatsScreen
// Dependencies: [17, 14146, 6314, 21, 5243, 575, 6684, 1113, 3269, 7374, 14161, 14383, 14382, 14384, 14402, 14391, 14163, 14375, 14376, 14389, 504, 14160, 2]
// Exports: default

// Module 14401 (CheckpointGamesStatsScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _modDef3269 from "module_3269" /* 3269 */;
import CheckpointTextDefault from "CheckpointText" /* 14161 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 14163 */;
import _modDef14375 from "module_14375" /* 14375 */;
import _modDef14376 from "module_14376" /* 14376 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 14382 */;
import CheckpointNumberUtils from "CheckpointNumberUtils" /* 14383 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 14384 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 14389 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 14391 */;
import CheckpointGameCard2 from "CheckpointGameCard" /* 14402 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;
import CheckpointConstants from "CheckpointConstants" /* 6314 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, game, importDefault, list;

let hasOwnProperty;
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
function UserGames(gameStats) {
  let closure_0;
  let formatResult;
  let items;
  let items2;
  let tmp3Result;
  gameStats = gameStats.gameStats;
  const tmp = closure_9();
  _require = tmp;
  let num;
  const _Math = Math;
  if (gameStats != null) {
    num = gameStats.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = require("CheckpointStatsUtils").getCheckpointTopPercent;
  require("CheckpointStatsUtils");
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
  let intl = tmp3(1113).intl;
  let formatToPlainStringResult;
  const stringResult = intl.string(_modDef3269.HM2fjf);
  if (null != checkpointTopPercent) {
    const intl2 = tmp3(1113).intl;
    let obj = { percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(tmp8(3269).VjXwW9, obj);
  }
  let obj2 = { style: tmp.container, children: items2 };
  let obj3 = { style: tmp.title, children: items };
  let obj4 = { size: "refresh_sm", color };
  items = [closure_7(require("GameControllerIcon").GameControllerIcon, obj4), ];
  let obj5 = { isStepHeading: true, variant: "heading-sm/semibold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp8Result = CheckpointTextDefault;
  items[1] = closure_7(tmp8Result, obj5);
  const items1 = [closure_8(View, obj3), , ];
  let obj6 = { accessible: true, accessibilityLabel: tmp3Result.formatCheckpointStatAccessibilityLabel("games", roundResult), style: tmp.number, children: closure_7(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  tmp3Result = require("CheckpointNumberUtils");
  items1[1] = closure_7(View, obj6);
  const obj7 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp8Result2 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp3(1113).intl;
    const obj8 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_7(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp8(3269)["hc0/yJ"], obj8);
  } else {
    const intl3 = tmp3(1113).intl;
    const obj9 = { numGames: roundResult };
    formatResult = intl3.format(tmp8(3269).aJMJ6b, obj9);
  }
  const obj10 = { children: items1 };
  items1[2] = closure_7(tmp8Result2, obj7);
  items2 = [closure_8(View, obj10), ];
  const obj11 = {
    style: tmp.games,
    children: games.map((game, index) => {
      let intl;
      let items;
      let obj2;
      let obj4;
      let obj6;
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { accessible: true, accessibilityLabel: intl.formatToPlainString(_modDef3269.mqdLhl, obj2), style: closure_0.game, children: items };
      intl = intl5.intl;
      obj2 = { gameName: game.name, rank: sum, numSessions: rounded };
      const obj3 = { game, style: closure_0.cover, children: metroImportDefault(CheckpointRankTagDefault, obj4) };
      const CheckpointGameCard = CheckpointGameCard2.CheckpointGameCard;
      obj4 = { rank: sum, style: closure_0.rank };
      items = [metroImportDefault(CheckpointGameCard, obj3), ];
      const obj5 = { name: game.name, label: obj6.formatCheckpointStatNumber(rounded), textAlignment: "left" };
      const CheckpointGameCardDescription = CheckpointGameCard2.CheckpointGameCardDescription;
      obj6 = CheckpointNumberUtils;
      items[1] = metroImportDefault(CheckpointGameCardDescription, obj5);
      return metroImportAll(View, obj, game.id);
    })
  };
  items2[1] = closure_7(View, obj11);
  return closure_8(View, obj2);
}
function GlobalGames(gameStats) {
  let closure_1;
  let intl2;
  let items;
  let items1;
  let items2;
  let items3;
  let stringResult;
  gameStats = gameStats.gameStats;
  const tmp = closure_9();
  importDefault = tmp;
  let obj = { style: items, children: items3 };
  items = [, ];
  ({ container: arr[0], globalContainer: arr[1] } = tmp);
  let obj2 = { style: tmp.header, children: items2 };
  let obj3 = { style: tmp.globalHeading, children: items1 };
  const obj4 = { animatedUri: _modDef14375, staticUri: _modDef14376, style: tmp.globe };
  const tmp2 = CheckpointApngPlayerDefault;
  items1 = [closure_7(tmp2, obj4), ];
  const obj5 = { isStepHeading: true, children: stringResult.toLocaleUpperCase() };
  const tmp3 = CheckpointDisplayTextDefault;
  let intl = gameStats(1113).intl;
  stringResult = intl.string(_modDef3269.qbCgI7);
  items1[1] = closure_7(tmp3, obj5);
  items2 = [closure_8(View, obj3), ];
  const obj6 = { variant: "heading-lg/medium", children: intl2.string(_modDef3269["0oDeiM"]) };
  const tmp4 = CheckpointTextDefault;
  intl2 = gameStats(1113).intl;
  items2[1] = closure_7(tmp4, obj6);
  items3 = [closure_8(View, obj2), ];
  const obj7 = {
    style: tmp.globalGames,
    children: closure_5.map((list) => {
      let items;
      list = list.list;
      const first = gameStats[list][0];
      if (null == first) {
        return null;
      } else {
        const intl = intl5.intl;
        const stringResult = intl.string(tmp);
        const _HermesInternal = HermesInternal;
        const obj = { accessible: true, accessibilityLabel: "" + first.name + ", " + stringResult, style: closure_1.globalGame, children: items };
        const obj2 = { game: first, style: closure_1.globalCover };
        items = [metroImportDefault(CheckpointGameCard2.CheckpointGameCard, obj2), ];
        const obj3 = { name: first.name, label: stringResult.toLocaleUpperCase(), textAlignment: "center" };
        const CheckpointGameCardDescription = CheckpointGameCard2.CheckpointGameCardDescription;
        items[1] = metroImportDefault(CheckpointGameCardDescription, obj3);
        return metroImportAll(View, obj, list);
      }
    })
  };
  items3[1] = closure_7(View, obj7);
  return closure_8(View, obj);
}
const View = react_native.View;
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: hasOwnProperty, CHECKPOINT_PRIMARY: metroRequire } = CheckpointConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, globalHeading: obj5, globe: { width: 75, height: 56 }, title: obj6, titleText: { flexShrink: 1 }, number: obj7, games: obj8, game: obj9, cover: { width: "87.5%" }, rank: { position: "absolute", bottom: 0, left: 0 }, globalGames: obj10, globalGame: obj11, globalCover: { width: 96 } };
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
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default function CheckpointGamesStatsScreen() {
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
  if (!stateFromStores1) {
    let tmp4Result;
    if (null != stateFromStores2) {
      const obj4 = { gameStats: stateFromStores2 };
      tmp4Result = tmp4(GlobalGames, obj4);
    }
    const obj5 = { children: tmp4Result };
    return metroImportDefault(tmp5, obj5);
  }
  tmp4Result = tmp4(UserGames, { gameStats: stateFromStores });
};
