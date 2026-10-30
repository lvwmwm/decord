// Module ID: 13628
// Function ID: 13629
// Name: CheckpointGamesStatsScreen
// Dependencies: [17, 2015, 13386, 6061, 21, 5009, 575, 504, 13399, 1114, 3091, 13585, 13592, 13593, 13594, 13606, 13587, 9707, 13600, 13601, 1410, 5712, 8135, 13608, 5619, 2]
// Exports: default

// Module 13628 (CheckpointGamesStatsScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl7 from "intl" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import _modDef3091 from "module_3091" /* 3091 */;
import FastImageDefault from "FastImage" /* 5712 */;
import CheckpointTextDefault from "CheckpointText" /* 13587 */;
import CheckpointApngPlayerDefault from "CheckpointApngPlayer" /* 13592 */;
import _modDef13593 from "module_13593" /* 13593 */;
import _modDef13594 from "module_13594" /* 13594 */;
import CheckpointCountUpStatNumberDefault from "CheckpointCountUpStatNumber" /* 13600 */;
import CheckpointEmphasisDefault from "CheckpointEmphasis" /* 13601 */;
import CheckpointDisplayTextDefault from "CheckpointDisplayText" /* 13606 */;
import CheckpointRankTagDefault from "CheckpointRankTag" /* 13608 */;
import GameStore from "GameStore" /* 2015 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;
import CheckpointConstants from "CheckpointConstants" /* 6061 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let list;

let CHECKPOINT_PRIMARY;
let c9;
let metroImportAll;
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
function GameCard(game) {
  let accessibilityLabel;
  let iconHash;
  let items1;
  let items2;
  let items3;
  let items4;
  let label;
  let name;
  let obj7;
  let tmp10;
  let tmp11;
  game = game.game;
  const id = game.id;
  let coverImageHash = game.coverImageHash;
  const rank = game.rank;
  ({ name, iconHash } = game);
  ({ label, accessibilityLabel } = game);
  const tmp = closure_10();
  const items = [GameStore];
  const obj = id(504);
  let stateFromStores = obj.useStateFromStores(items, () => GameStore.getCoverImageUrl(id, { size: 480 }));
  if (stateFromStores == null) {
    const obj2 = { id, icon: coverImageHash, fallbackAvatar: false };
    const getApplicationIconURL = AvatarUtilsDefault.getApplicationIconURL;
    AvatarUtilsDefault;
    if (coverImageHash == null) {
      coverImageHash = iconHash;
    }
    stateFromStores = getApplicationIconURL(obj2);
  }
  const obj3 = { accessible: true, accessibilityLabel, style: tmp.game, children: items3 };
  const obj4 = { style: tmp.cover, children: items2 };
  if (null != stateFromStores) {
    const obj5 = { source: obj7.makeSource(stateFromStores), style: tmp.coverImage, resizeMode: "cover" };
    const tmp14 = FastImageDefault;
    obj7 = AvatarUtilsDefault;
    tmp11 = closure_8(tmp14, obj5);
    tmp10 = closure_8;
  } else {
    const obj6 = { style: items1, children: closure_8(id(8135).UnknownGameIcon, { size: "lg" }) };
    items1 = [, ];
    ({ coverImage: arr2[0], unknownCover: arr2[1] } = tmp);
    tmp10 = closure_8;
    tmp11 = closure_8(tmp8, obj6);
  }
  items2 = [tmp11, ];
  let tmp10Result = null != rank;
  if (tmp10Result) {
    const obj8 = { rank, style: tmp.rank };
    tmp10Result = tmp10(CheckpointRankTagDefault, obj8);
  }
  items2[1] = tmp10Result;
  items3 = [closure_9(View, obj4), ];
  const obj9 = { style: tmp.gameText, children: items4 };
  items4 = [, ];
  const obj10 = { variant: "text-md/semibold", style: tmp.gameName, lineClamp: 2, children: name };
  items4[0] = tmp10(id(5619).Text, obj10);
  const obj11 = { variant: "experimental/mono-md/bold", style: tmp.gameLabel, children: label };
  items4[1] = tmp10(CheckpointTextDefault, obj11);
  items3[1] = closure_9(View, obj9);
  return closure_9(View, obj3);
}
const View = react_native.View;
({ CHECKPOINT_GLOBAL_GAME_CATEGORIES: metroRequire, CHECKPOINT_PRIMARY } = CheckpointConstants);
const CHECKPOINT_WHITE = CheckpointConstants.CHECKPOINT_WHITE;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, globalContainer: obj3, header: obj4, globalHeading: obj5, globe: { width: 75, height: 56 }, title: obj6, titleText: { flexShrink: 1 }, number: obj7, games: obj8, game: obj9, cover: { width: "87.5%", aspectRatio: 0.75 }, coverImage: { width: "100%", height: "100%", borderWidth: 1, borderColor: CHECKPOINT_PRIMARY }, unknownCover: obj10, rank: { position: "absolute", bottom: 0, left: 0 }, gameText: obj11, gameName: { color: CHECKPOINT_WHITE }, gameLabel: { fontSize: 14, lineHeight: 18 } };
obj2 = { width: "100%", flexGrow: 1, justifyContent: "center", gap: nativeDefault.space.PX_40, paddingBottom: nativeDefault.space.PX_64 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_32 };
obj4 = { gap: nativeDefault.space.PX_12 };
obj5 = { alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7 = { marginTop: -nativeDefault.space.PX_8, marginBottom: -nativeDefault.space.PX_4 };
obj8 = { flexDirection: "row", flexWrap: "wrap", columnGap: nativeDefault.space.PX_16, rowGap: nativeDefault.space.PX_12 };
obj9 = { width: "30%", gap: nativeDefault.space.PX_8 };
obj10 = { backgroundColor: nativeDefault.colors.BLACK, alignItems: "center", justifyContent: "center" };
obj11 = { gap: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/stats/CheckpointGamesStatsScreen.tsx");

export default function CheckpointGamesStatsScreen() {
  let formatResult;
  let intl6;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items9;
  let obj6;
  let stateFromStores1;
  let stringResult1;
  const tmp = closure_10();
  let obj = stateFromStores1(504);
  const items = [CheckpointStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const stats = CheckpointStore.stats;
    let games;
    if (stats != null) {
      games = stats.games;
    }
    return games;
  });
  let obj2 = stateFromStores1(504);
  const items1 = [CheckpointStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const globalStats = CheckpointStore.globalStats;
    let games;
    if (globalStats != null) {
      games = globalStats.games;
    }
    return games;
  });
  const items2 = [CheckpointStore];
  let num;
  const obj3 = stateFromStores1(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    const obj = stateFromStores1(dependencyMap[8]);
    return obj.hasCheckpointGames(CheckpointStore.stats);
  });
  const _Math = Math;
  if (stateFromStores != null) {
    num = stateFromStores.totalGamesPlayed;
  }
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  let prop;
  const getCheckpointTopPercent = stateFromStores1(13399).getCheckpointTopPercent;
  stateFromStores1(13399);
  if (stateFromStores != null) {
    prop = stateFromStores.totalGamesPlayedPercentile;
  }
  const checkpointTopPercent = getCheckpointTopPercent(prop);
  let games;
  if (stateFromStores != null) {
    games = stateFromStores.games;
  }
  if (games == null) {
    games = [];
  }
  let intl = tmp2(1114).intl;
  let stringResult = intl.string(_modDef3091.HM2fjf);
  let formatToPlainStringResult;
  if (null != checkpointTopPercent) {
    const intl2 = tmp2(1114).intl;
    const obj4 = { percent: checkpointTopPercent };
    formatToPlainStringResult = intl2.formatToPlainString(tmp11(3091).VjXwW9, obj4);
  }
  if (!stateFromStores2) {
    let obj5;
    if (null != stateFromStores1) {
      obj5 = { children: closure_9(View, obj6) };
      obj6 = { style: items3, children: items6 };
      items3 = [, ];
      ({ container: arr8[0], globalContainer: arr8[1] } = tmp);
      const obj7 = { style: tmp.header, children: items5 };
      const obj8 = { style: tmp.globalHeading, children: items4 };
      const obj9 = { animatedUri: _modDef13593, staticUri: _modDef13594, style: tmp.globe };
      const tmp11Result = CheckpointApngPlayerDefault;
      items4 = [closure_8(tmp11Result, obj9), ];
      const obj10 = { isStepHeading: true, children: stringResult1.toLocaleUpperCase() };
      const tmp11Result5 = CheckpointDisplayTextDefault;
      const intl5 = tmp2(1114).intl;
      stringResult1 = intl5.string(_modDef3091.qbCgI7);
      items4[1] = closure_8(tmp11Result5, obj10);
      items5 = [closure_9(View, obj8), ];
      const obj11 = { variant: "heading-lg/medium", children: intl6.string(_modDef3091["0oDeiM"]) };
      const tmp11Result6 = CheckpointTextDefault;
      intl6 = tmp2(1114).intl;
      items5[1] = closure_8(tmp11Result6, obj11);
      items6 = [closure_9(View, obj7), ];
      const obj12 = {
        style: tmp.games,
        children: closure_6.map((list) => {
              list = list.list;
              const first = stateFromStores1[list][0];
              if (null == first) {
                return null;
              } else {
                const intl = intl7.intl;
                const stringResult = intl.string(tmp);
                const _HermesInternal = HermesInternal;
                const obj = { game: first, label: stringResult.toLocaleUpperCase(), accessibilityLabel: "" + first.name + ", " + stringResult };
                return metroImportAll(GameCard, obj, list);
              }
            })
      };
      items6[1] = closure_8(View, obj12);
    }
    return closure_8(tmp14, obj5);
  }
  const obj14 = { style: tmp.title, children: items7 };
  items7 = [, ];
  const obj13 = { style: tmp.container, children: items9 };
  const obj15 = { size: "refresh_sm", color: CHECKPOINT_PRIMARY };
  items7[0] = closure_8(stateFromStores1(9707).GameControllerIcon, obj15);
  const obj16 = { isStepHeading: true, variant: "heading-md/extrabold", style: tmp.titleText, children: stringResult.toLocaleUpperCase() };
  const tmp11Result7 = CheckpointTextDefault;
  items7[1] = closure_8(tmp11Result7, obj16);
  const items8 = [closure_9(View, obj14), , ];
  const obj17 = { accessible: true, accessibilityLabel: "" + roundResult + " " + stringResult.toLocaleLowerCase(), style: tmp.number, children: closure_8(CheckpointCountUpStatNumberDefault, { end: roundResult }) };
  items8[1] = closure_8(View, obj17);
  const obj18 = { variant: "heading-lg/medium", accessibilityLabel: formatToPlainStringResult, children: formatResult };
  const tmp11Result8 = CheckpointTextDefault;
  if (null != checkpointTopPercent) {
    const intl4 = tmp2(1114).intl;
    const obj19 = {
      percent: checkpointTopPercent,
      percentHook(children, arg1) {
          const obj = { children };
          return closure_1_8(CheckpointEmphasisDefault, obj, arg1);
        }
    };
    formatResult = intl4.format(tmp11(3091)["hc0/yJ"], obj19);
  } else {
    const intl3 = tmp2(1114).intl;
    const obj20 = { numGames: roundResult };
    formatResult = intl3.format(tmp11(3091).aJMJ6b, obj20);
  }
  const obj21 = { children: closure_9(View, obj13) };
  const obj22 = { children: items8 };
  items8[2] = closure_8(tmp11Result8, obj18);
  items9 = [closure_9(View, obj22), ];
  const obj23 = {
    style: tmp.games,
    children: games.map((game, index) => {
      let intl;
      let obj2;
      game = game.game;
      const sum = index + 1;
      const rounded = Math.round(game.numSessions);
      const obj = { game, rank: sum, label: rounded, accessibilityLabel: intl.formatToPlainString(_modDef3091.mqdLhl, obj2) };
      intl = stateFromStores1(dependencyMap[9]).intl;
      obj2 = { gameName: game.name, rank: sum, numSessions: rounded };
      return closure_1_8(GameCard, obj, game.id);
    })
  };
  items9[1] = closure_8(View, obj23);
  obj5 = obj21;
};
